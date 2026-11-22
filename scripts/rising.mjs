#!/usr/bin/env node
// Find rising stars: young GitHub repos gaining stars fast that you do not star
// yet, ranked by star velocity and by how well they match your collection.
//
//   node scripts/rising.mjs                       # default windows, all topics
//   node scripts/rising.mjs --topics mcp,rag      # also search these topics
//   node scripts/rising.mjs --max-age 60 --limit 30
//
// Unlike discover.mjs this needs no report: the "landscape" is your whole set of
// stars. Topic affinity comes from the topic counts in data/classified.json, so
// a repo tagged `mcp` + `claude-code` outranks an equally fast repo about
// Kubernetes operators.
//
// Cost: roughly 10-25 search calls (the search API allows 30/min) plus 3 calls
// for your most recent stars. No GraphQL, no README fetches.
//
// Writes reports/rising-stars.candidates.md and .json, and prints the table.

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { rest, sleep } from './lib/github.mjs';
import { loadIgnored } from './lib/ignore.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DAY = 86_400_000;

function arg(name, fallback = undefined) {
  const hit = process.argv.slice(2).find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.split('=').slice(1).join('=');
  const idx = process.argv.indexOf(`--${name}`);
  if (idx > -1 && process.argv[idx + 1] && !process.argv[idx + 1].startsWith('--')) return process.argv[idx + 1];
  return fallback;
}
const flag = (name) => process.argv.includes(`--${name}`);

const maxAge = Number(arg('max-age', 180));
const limit = Number(arg('limit', 40));
const topTopics = Number(arg('top-topics', 10));
const extraTopics = (arg('topics', '') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
const now = Date.now();

// Age windows with a star floor that rises with age, so a 10-day-old repo with
// 300 stars and a 5-month-old repo with 3,000 both qualify.
const WINDOWS = [
  { days: 14, minStars: 150 },
  { days: 45, minStars: 500 },
  { days: 120, minStars: 1500 },
  { days: 180, minStars: 3000 },
].filter((w) => w.days <= maxAge);
// Topic queries use a lower floor: a niche riser in your field matters more
// than a generic one, and would never surface in the global top 100.
const TOPIC_WINDOW = { days: Math.min(maxAge, 90), minStars: 100 };

// Generic tags that say nothing about what you care about.
const STOP_TOPICS = new Set([
  'hacktoberfest', 'open-source', 'opensource', 'python', 'typescript', 'javascript',
  'rust', 'go', 'golang', 'awesome', 'awesome-list', 'ai', 'llm', 'github', 'nodejs',
]);

// ---- Your collection ---------------------------------------------------------
const classified = JSON.parse(readFileSync(path.join(ROOT, 'data/classified.json'), 'utf8'));
const starred = new Set(classified.repos.map((r) => r.full_name.toLowerCase()));
for (const name of loadIgnored()) starred.add(name);

// The dataset lags the account by up to a week; pull the newest stars live so a
// repo starred yesterday is not proposed again.
let liveAdded = 0;
for (let page = 1; page <= 3; page++) {
  try {
    const { data } = await rest(`/user/starred?sort=created&direction=desc&per_page=100&page=${page}`);
    for (const r of data) {
      const k = r.full_name.toLowerCase();
      if (!starred.has(k)) { starred.add(k); liveAdded++; }
    }
    if (data.length < 100) break;
  } catch (e) {
    console.error(`  ! could not read live stars (${e.message.split('\n')[0]}); using dataset only`);
    break;
  }
}

const topicCount = new Map();
for (const r of classified.repos) for (const t of r.topics || []) topicCount.set(t, (topicCount.get(t) || 0) + 1);
const topicWeight = new Map(
  [...topicCount].filter(([t, c]) => c >= 3 && !STOP_TOPICS.has(t)).map(([t, c]) => [t, Math.log2(1 + c)]),
);
const maxWeight = Math.max(...topicWeight.values());
const searchTopics = [
  ...new Set([
    ...[...topicWeight].sort((a, b) => b[1] - a[1]).slice(0, topTopics).map(([t]) => t),
    ...extraTopics,
  ]),
];

// Description words that recur across your stars, for repos with no topics.
const WORD_RE = /[a-z][a-z0-9+-]{2,}/g;
const STOP_WORDS = new Set('the and for with your that this from into are you via any all can its not use using based built tool tools open source framework library simple fast easy best more new one app apps code'.split(' '));
const wordCount = new Map();
for (const r of classified.repos) {
  for (const w of new Set((r.description || '').toLowerCase().match(WORD_RE) || [])) {
    if (!STOP_WORDS.has(w)) wordCount.set(w, (wordCount.get(w) || 0) + 1);
  }
}

// ---- Search ------------------------------------------------------------------
const isoDay = (ms) => new Date(ms).toISOString().slice(0, 10);
const queries = [];
for (const w of WINDOWS) {
  queries.push({ label: `<${w.days}d ≥${w.minStars}★`, q: `created:>${isoDay(now - w.days * DAY)} stars:>=${w.minStars} fork:false archived:false`, pages: 2 });
}
if (!flag('no-topics')) {
  for (const t of searchTopics) {
    queries.push({ label: `topic:${t}`, q: `topic:${t} created:>${isoDay(now - TOPIC_WINDOW.days * DAY)} stars:>=${TOPIC_WINDOW.minStars} fork:false archived:false`, pages: 1 });
  }
}

console.error(`Collection: ${starred.size} held (${liveAdded} newer than the dataset). Running ${queries.length} queries…`);
const found = new Map();
let calls = 0;
for (const { label, q, pages } of queries) {
  let hits = 0;
  for (let page = 1; page <= pages; page++) {
    // Search allows 30 requests/min; 2.1s spacing stays under it.
    if (calls++) await sleep(2100);
    let data;
    try {
      ({ data } = await rest(`/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=100&page=${page}`));
    } catch (e) {
      console.error(`  ! ${label} p${page}: ${e.message.split('\n')[0]}`);
      break;
    }
    for (const r of data.items) {
      const k = r.full_name.toLowerCase();
      const prev = found.get(k);
      if (prev) { prev.via.add(label); continue; }
      found.set(k, { ...r, via: new Set([label]) });
      hits++;
    }
    if (data.items.length < 100) break;
  }
  console.error(`  ${label.padEnd(28)} +${hits}`);
}

// ---- Score -------------------------------------------------------------------
function kindOf(r) {
  const s = `${r.name} ${r.description || ''}`.toLowerCase();
  if (/\bawesome\b|curated list|list of /.test(s)) return 'list';
  if (/(prompts?|system prompts?) (collection|leak)|leaked/.test(s)) return 'prompts';
  return 'project';
}

function affinity(r) {
  const topics = (r.topics || []).filter((t) => topicWeight.has(t));
  // Best three matches, so a repo tagged with 20 trending topics cannot buy a
  // perfect fit; description words are a weaker, secondary signal.
  const best = topics.map((t) => topicWeight.get(t)).sort((a, b) => b - a).slice(0, 3);
  const topicScore = best.reduce((s, w) => s + w, 0) / (maxWeight * 3);
  const words = new Set((r.description || '').toLowerCase().match(WORD_RE) || []);
  let wordScore = 0;
  for (const w of words) if ((wordCount.get(w) || 0) >= 15) wordScore += Math.log2(wordCount.get(w)) / 30;
  wordScore = Math.min(1, wordScore);
  return { score: 0.7 * topicScore + 0.3 * wordScore, matched: topics };
}

const rows = [];
for (const [k, r] of found) {
  if (starred.has(k) || r.fork || r.archived) continue;
  const ageDays = Math.max(2, (now - Date.parse(r.created_at)) / DAY);
  if (ageDays > maxAge) continue;
  const velocity = r.stargazers_count / ageDays;
  const fit = affinity(r);
  rows.push({
    full_name: r.full_name,
    url: r.html_url,
    description: (r.description || '').replace(/\s+/g, ' ').trim(),
    stars: r.stargazers_count,
    forks: r.forks_count,
    ageDays: Math.round(ageDays),
    velocity,
    pushedDays: Math.round((now - Date.parse(r.pushed_at)) / DAY),
    language: r.language,
    topics: r.topics || [],
    matched: fit.matched,
    affinity: fit.score,
    kind: kindOf(r),
    via: [...r.via],
  });
}

// Velocity is log-scaled against the fastest candidate so one viral repo does
// not flatten everyone else to zero.
const maxLogV = Math.max(...rows.map((r) => Math.log10(1 + r.velocity)));
for (const r of rows) {
  const v = Math.log10(1 + r.velocity) / maxLogV;
  const stalePenalty = r.pushedDays > 30 ? 0.7 : 1;
  const kindPenalty = r.kind === 'project' ? 1 : 0.75;
  r.speed = Math.round(v * 100);
  r.fit = Math.round(r.affinity * 100);
  // Star farms show up as huge star counts nobody forks or files issues on.
  const forkRatio = r.forks / Math.max(1, r.stars);
  r.suspect = r.stars >= 3000 && forkRatio < 0.02;
  const suspectPenalty = r.suspect ? 0.6 : 1;
  r.score = Math.round((0.55 * v + 0.45 * r.affinity) * stalePenalty * kindPenalty * suspectPenalty * 100);
}
rows.sort((a, b) => b.score - a.score);
const top = rows.slice(0, limit);

// ---- Render ------------------------------------------------------------------
const fmt = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));
const cell = (s) => s.replace(/\|/g, '\\|');
const lines = [
  `# Rising stars — ${isoDay(now)}`,
  '',
  `Young repos gaining stars fast that are not in your ${starred.size} stars. ` +
    `${found.size} search hits, ${rows.length} unstarred, top ${top.length} shown.`,
  '',
  '`Score` = 55% speed (log stars/day) + 45% fit (overlap with your topics and description vocabulary), ' +
    'x0.7 if no push in 30 days, x0.75 for lists and prompt dumps, x0.6 and ⚠ when forks are under 2% of stars at 3k+ (likely star-farmed). Overrule it when `speed` and `fit` disagree.',
  '',
  '| # | Repo | Score | speed/fit | ★ | ★/day | Age | Kind | Matches | What it is |',
  '|---|---|---|---|---|---|---|---|---|---|',
  ...top.map((r, i) =>
    `| ${i + 1} | [${r.full_name}](${r.url}) | ${r.score} | ${r.speed}/${r.fit} | ${fmt(r.stars)}${r.suspect ? ' ⚠' : ''} | ${Math.round(r.velocity)} | ${r.ageDays}d | ${r.kind} | ${r.matched.slice(0, 4).join(', ') || '—'} | ${cell(r.description.slice(0, 110))} |`,
  ),
  '',
];
const md = lines.join('\n');
writeFileSync(path.join(ROOT, 'reports/rising-stars.candidates.md'), md);
writeFileSync(
  path.join(ROOT, 'reports/rising-stars.candidates.json'),
  JSON.stringify({ generated: isoDay(now), held: starred.size, hits: found.size, candidates: rows.slice(0, 150) }, null, 2),
);
console.log(md);
console.error(`Wrote reports/rising-stars.candidates.md and .json (${calls} search calls)`);
