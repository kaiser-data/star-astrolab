#!/usr/bin/env python3
"""
Generate a report on Agent Skills (SKILL.md) with a focus on skill OPTIMIZATION:
how to author, evaluate, slim down, secure, distribute and evolve skills, using
only repos from the starred dataset.

Inputs:
  data/classified.json
  public/data/graph.json

Output:
  reports/agent-skills.md   (+ reports/agent-skills.meta.json)

Run: python3 scripts/reports/agent_skills.py
"""
import json
import os
from datetime import datetime, timezone

from lib import fmt_stars, CLASSIFIED, GRAPH, fmt_int, days_to_human, activity_label, make_node_for

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SLUG = "agent-skills"
TITLE = "Agent Skills — How to Write, Measure, Slim Down and Secure Them"
OUT = os.path.join(ROOT, f"reports/{SLUG}.md")
META_OUT = os.path.join(ROOT, f"reports/{SLUG}.meta.json")

# ---- Curated taxonomy --------------------------------------------------------
# Primary axis = the stage of a skill's life the tool helps with. A skill is
# written, measured, trimmed, gated, shared, vetted and (optionally) evolved;
# most repos help with exactly one of those stages.
STAGES = [
    "Author & capture",
    "Evaluate & benchmark",
    "Optimize context cost",
    "Quality-gate exemplars",
    "Self-improving skills",
    "Discover & distribute",
    "Vet & secure",
]
TAXONOMY = {
    # ===== Author & capture =====
    "anthropics/skills": ("Author & capture",
        "The reference for the format: `name` + `description` frontmatter, a template skill, and official examples. Start every skill here."),
    "mattpocock/skills": ("Author & capture",
        "Small, composable engineering skills that keep you in control instead of owning the whole process. A model of how short a good skill can be."),
    "obra/superpowers": ("Author & capture",
        "Skills framework plus a method for writing skills test-first: watch the agent fail without the skill, then write only what fixes it."),
    "virgiliojr94/book-to-skill": ("Author & capture",
        "Turns a book, a folder or a set of sources into one skill with per-chapter files loaded on demand. Claims 24–51× fewer tokens than pasting the book."),
    "microsoft/skill-recorder": ("Author & capture",
        "Record yourself doing a task once; it reconstructs the intent and ordered steps and turns them into a reusable skill."),

    # ===== Evaluate & benchmark =====
    "microsoft/waza": ("Evaluate & benchmark",
        "The most complete skill test bench here: graded trials, model comparisons, eval coverage against SKILL.md, token counts and budget diffs against main."),
    "stevesolun/ctx": ("Evaluate & benchmark",
        "Tests candidate agent setups (instructions, skills, tools) against real tasks in your repo and applies the cheapest one that stays reliable."),
    "pinchbench/skill": ("Evaluate & benchmark",
        "Real-task benchmark for models acting as OpenClaw agents. Useful as a task pool when you build your own skill evals."),
    "mrtooher/fable-mode": ("Evaluate & benchmark",
        "A planning-and-verification skill benchmarked three times, with a README that says what the skill does not do. A good template for honest skill claims."),

    # ===== Optimize context cost =====
    "alexgreensh/token-optimizer": ("Optimize context cost",
        "Audits where context goes, including unused skills, bloated configs and stale memory, then trims it with hooks."),
    "JuliusBrussee/caveman": ("Optimize context cost",
        "A skill that makes the agent answer tersely. Claims ~65% fewer output tokens; you trade some readability."),
    "DietrichGebert/ponytail": ("Optimize context cost",
        "A 'write less code' skill with an A/B benchmark: −45% tokens and −53% code on 39 tasks, while more risky logic shipped with a test."),

    # ===== Quality-gate exemplars =====
    "Nutlope/hallmark": ("Quality-gate exemplars",
        "Design skill that lints its own result in a real browser against known AI-slop patterns, then hands it to a fresh-context reviewer. Gates in tiers."),
    "addyosmani/agent-skills": ("Quality-gate exemplars",
        "Engineering skills mapped to a lifecycle (spec → plan → build → test → review → ship), each with its own quality gate."),
    "cloudflare/security-audit-skill": ("Quality-gate exemplars",
        "Multi-phase security audit skill whose findings are verified independently and written in a machine-readable format."),
    "Leonxlnx/taste-skill": ("Quality-gate exemplars",
        "Design skills that ask for reference images and end with a browser check instead of trusting the first render."),
    "pbakaus/impeccable": ("Quality-gate exemplars",
        "Design vocabulary for coding agents: steer with named moves, then review with a critique pass."),
    "ayghri/i-have-adhd": ("Quality-gate exemplars",
        "One narrow output rule (answer first) packaged as a skill. Shows how small a skill that changes behaviour can be."),
    "hardikpandya/stop-slop": ("Quality-gate exemplars",
        "A single skill file that strips AI tells from prose. Narrow scope, easy to test."),

    # ===== Self-improving skills =====
    "HKUDS/OpenSpace": ("Self-improving skills",
        "A skill management layer: finds the right skill per task, tracks which skills work, and evolves them from failures, across Claude Code, Codex and OpenClaw."),
    "Memento-Teams/Memento-Skills": ("Self-improving skills",
        "A skill-centred agent runtime that writes and refines its own skills through reflection and replanning."),
    "HKUDS/UpSkill": ("Self-improving skills",
        "Captures agent failures, distils them into skills validated in a loop, and injects them so a cheaper model can do the job."),
    "affaan-m/ECC": ("Self-improving skills",
        "Harness performance system that turns repeated wins into skills and 'instincts'; plan → test → review → remember → improve."),
    "volcengine/OpenViking": ("Self-improving skills",
        "Context database that stores skills next to memory and knowledge as browsable files with generated summaries."),

    # ===== Discover & distribute =====
    "anthropics/claude-plugins-official": ("Discover & distribute",
        "Anthropic's plugin directory; plugins are how skills ship with hooks, commands and updates. Third-party entries still need vetting."),
    "sickn33/agentic-awesome-skills": ("Discover & distribute",
        "2,884+ SKILL.md playbooks plus AAS Core, which lets the agent search the catalog locally and preview a plan. It does not rank skills."),
    "ComposioHQ/awesome-claude-skills": ("Discover & distribute",
        "The most-starred curated list of Claude skills and tools."),
    "openclaw/clawhub": ("Discover & distribute",
        "The skill and plugin registry for OpenClaw."),
    "nextlevelbuilder/skillx": ("Discover & distribute",
        "Skill marketplace with semantic search, a leaderboard, and a CLI that reports each skill run's outcome back."),
    "arcadeai-labs/smithery-cli": ("Discover & distribute",
        "CLI to search, install and develop MCP servers and skills from the Smithery registry."),

    # ===== Vet & secure =====
    "NVIDIA/SkillSpector": ("Vet & secure",
        "Scans a skill before install for prompt injection, exfiltration and supply-chain risks. Its dataset: 26.1% of 31,132 skills vulnerable, 5.2% likely malicious."),
    "Tencent/AI-Infra-Guard": ("Vet & secure",
        "Red-teaming platform with a dedicated skills scan next to agent, MCP and infrastructure scans."),
    "tech-leads-club/agent-skills": ("Vet & secure",
        "A registry that only publishes verified, tested skills, citing >13% of marketplace skills with critical vulnerabilities."),
}

# Overlaps routed elsewhere, kept honest.
ADJACENT = [
    ("alirezarezvani/claude-skills", "bulk skill pack (380+) — content, not optimization; covered in Claude Code Superpowers"),
    ("K-Dense-AI/scientific-agent-skills", "vertical science pack — covered in Claude Code Superpowers"),
    ("vercel-labs/agent-skills", "vendor domain pack (Vercel) — useful content, nothing about making skills better"),
    ("supabase/agent-skills", "vendor domain pack (Supabase) — same reason"),
    ("docker/skills", "vendor domain pack (Docker) — same reason"),
    ("Graphify-Labs/graphify", "code-graph skill — covered in Token Savings and Claude Code Superpowers"),
    ("thedotmack/claude-mem", "session memory, not skills — covered in Agent Memory"),
    ("travisvn/awesome-claude-skills", "second awesome-list, declining — ComposioHQ's list is the live one"),
    ("Leonxlnx/earshot", "a sense (hearing) for agents rather than a skill tool — covered in the video-creation report"),
]

ORDER = STAGES

# ---- Task rankings -----------------------------------------------------------
# (task, [(repo, note) x 3], evidence). Evidence = the projects' own READMEs in
# the dataset snapshot; no independent benchmarks were run.
TASK_RANKINGS = [
    ("Prove a skill actually helps (with vs. without)",
     [("microsoft/waza", "graded trials, `compare` across runs/models"),
      ("stevesolun/ctx", "real tasks in your repo; reliability floor, then cost"),
      ("pinchbench/skill", "borrow its real-world tasks for your eval set")],
     "waza and ctx both decide from runs, not from an LLM's opinion; ctx explicitly lets an LLM explain but never pick."),
    ("Make a skill trigger when it should",
     [("microsoft/waza", "`spec verify` + `coverage` check evals against SKILL.md"),
      ("anthropics/skills", "the description is the trigger — follow the template"),
      ("mattpocock/skills", "short, single-purpose skills are easier to route")],
     "Only waza tests triggering directly; the other two are patterns to copy."),
    ("Cut what a skill costs in context",
     [("microsoft/waza", "`tokens compare main --threshold` fails a PR that bloats a skill"),
      ("alexgreensh/token-optimizer", "finds unused skills and bloated configs"),
      ("virgiliojr94/book-to-skill", "per-chapter files loaded on demand; 24–51× claim")],
     "Load-on-demand files (progressive disclosure) are the main lever; the % figures are the projects' own."),
    ("Make the output of a skill trustworthy",
     [("Nutlope/hallmark", "browser lint + fresh-context reviewer, tiered gates"),
      ("addyosmani/agent-skills", "a gate per lifecycle phase"),
      ("mrtooher/fable-mode", "checks that can actually fail + cold double-check")],
     "Common pattern: the skill ends with a check that can fail, run by something other than the author's context."),
    ("Turn experience into new skills",
     [("microsoft/skill-recorder", "record the task once, get intent + steps"),
      ("virgiliojr94/book-to-skill", "from documents"),
      ("HKUDS/UpSkill", "from failures — but declining, verify first")],
     "Recorder and book-to-skill are active; UpSkill's loop is the right idea with thin maintenance."),
    ("Let skills improve between runs",
     [("affaan-m/ECC", "best-maintained; wins become skills/instincts"),
      ("HKUDS/OpenSpace", "most complete idea (retrieve, evaluate, evolve) — stale"),
      ("Memento-Teams/Memento-Skills", "reflection-driven, now a desktop app")],
     "None of these publishes an independent evaluation of the evolved skills; keep a human review on every change."),
    ("Check a skill before installing it",
     [("NVIDIA/SkillSpector", "purpose-built, part of NVIDIA's signing pipeline"),
      ("Tencent/AI-Infra-Guard", "skills scan inside a full red-team platform"),
      ("tech-leads-club/agent-skills", "install only from a vetted registry")],
     "SkillSpector's 26.1% / 5.2% figures come from its own research dataset."),
    ("Find an existing skill instead of writing one",
     [("sickn33/agentic-awesome-skills", "local catalog search via AAS Core"),
      ("anthropics/claude-plugins-official", "official directory, plugin updates"),
      ("openclaw/clawhub", "if you run OpenClaw")],
     "Large catalogs do not rank quality — scan whatever you pick (row above)."),
]

# ---- Load --------------------------------------------------------------------
with open(CLASSIFIED) as f:
    cl = json.load(f)
with open(GRAPH) as f:
    gr = json.load(f)

by_name = {r["full_name"]: r for r in cl["repos"]}
nodes_by_id = {n["id"]: n for n in gr["nodes"]}
name_to_nodeid = {n["full_name"]: n["id"] for n in gr["nodes"]}
node_for = make_node_for(nodes_by_id, name_to_nodeid)

sel_names = list(TAXONOMY.keys())
present = [n for n in sel_names if n in by_name]
sel_node_ids = {name_to_nodeid[n] for n in present if n in name_to_nodeid}
inter_edges = [l for l in gr["links"]
               if l["source"] in sel_node_ids and l["target"] in sel_node_ids]


def stage_of(n):
    return TAXONOMY[n][0]


def link(n):
    return f"[{n}]({by_name[n]['url']})"


by_stage = {s: sorted([n for n in present if stage_of(n) == s], key=lambda x: -by_name[x]["stars"])
            for s in STAGES}
total_stars = sum(by_name[n]["stars"] for n in present)
gen = cl.get("generatedAt", "")
user = cl.get("username", "")

lines = []
A = lines.append

A(f"# {TITLE}")
A("")
A(f"> Derived from **{user}**'s {fmt_int(cl['total'])} starred repos "
  f"(snapshot `{gen}`), cross-referenced with the repo-similarity graph "
  f"({fmt_int(len(gr['nodes']))} nodes / {fmt_int(len(gr['links']))} edges).")
A(">")
A(f"> Generated {datetime.now(timezone.utc).strftime('%Y-%m-%d')} by "
  f"`scripts/reports/{SLUG.replace('-', '_')}.py` (regenerate any time — no API cost).")
A("")

# --- Executive summary
A("## Executive summary")
A("")
A(f"- **{len(present)} repos about making skills better** ({fmt_int(total_stars)}★), sorted "
  f"by the stage of a skill's life they help with. Skill *packs* (collections of content) "
  f"are left to the Claude Code Superpowers report; this one is about the craft.")
A("- **Most skills are never measured.** Only a few repos here test a skill against a "
  "baseline: `microsoft/waza` (graded trials, token budgets, eval coverage) and "
  "`stevesolun/ctx` (cheapest setup that stays reliable on your own repo). Start there "
  "before tuning wording.")
A("- **Context cost is the quiet tax.** Every installed skill's description sits in the "
  "context on every turn; the body loads when triggered. Cut both: short descriptions, "
  "bodies split into files loaded on demand (`book-to-skill`), unused skills removed "
  "(`token-optimizer`), and a token budget enforced in review (`waza tokens compare`).")
A("- **The best skills end with a check that can fail.** `hallmark` lints in a real "
  "browser and asks a fresh-context reviewer; `fable-mode` and `addyosmani/agent-skills` "
  "put a gate on every stage. Copy that shape.")
A("- **Install with suspicion.** NVIDIA's `SkillSpector` dataset found 26.1% of 31,132 "
  "public skills vulnerable and 5.2% likely malicious (its own figures). Scan before "
  "installing anything from a large catalog.")
A("- **Self-improving skills are promising but thin.** `OpenSpace`, `UpSkill` and "
  "`Memento-Skills` all evolve skills from runs, but the first two have stalled and none "
  "publishes an independent evaluation. `ECC` is the maintained option today.")
A("- **New stars in this report:** `mattpocock/skills`, `Nutlope/hallmark`, `HKUDS/OpenSpace`.")
A("")

# --- Anatomy
A("## The life of a skill")
A("")
A("| Stage | The question it answers | Reach for |")
A("|---|---|---|")
stage_q = {
    "Author & capture": "How do I write (or record) it in the right shape?",
    "Evaluate & benchmark": "Does it help, compared with no skill?",
    "Optimize context cost": "What does it cost in tokens, and can that be cut?",
    "Quality-gate exemplars": "How does the skill check its own output?",
    "Self-improving skills": "Can it get better from its own runs?",
    "Discover & distribute": "Is there already one, and how do I ship mine?",
    "Vet & secure": "Is it safe to install?",
}
for s in STAGES:
    picks = ", ".join(f"`{n.split('/')[-1]}`" for n in by_stage[s][:3])
    A(f"| **{s}** | {stage_q[s]} | {picks} |")
A("")

# --- Master comparison
A("## Master comparison")
A("")
A("| Repo | Stage | ★ | Health | Activity | Lifecycle | What it does |")
A("|---|---|---|---|---|---|---|")
for s in STAGES:
    for n in by_stage[s]:
        r = by_name[n]
        A(f"| {link(n)} | {s} | {fmt_stars(r)} | {r.get('health_score', '—')} | "
          f"{activity_label(r)} | {r.get('lifecycle_stage', '—')} | {TAXONOMY[n][1]} |")
A("")

# --- Deep dives
A("## By stage")
A("")
stage_blurb = {
    "Author & capture": "A skill is a `SKILL.md` with two frontmatter fields and instructions. "
        "The description decides when it fires; the body is what the agent reads after. "
        "Write the smallest skill that changes the behaviour you saw fail.",
    "Evaluate & benchmark": "Run the same tasks with and without the skill, grade the "
        "results, and keep the runs. Without this, every later optimization is a guess.",
    "Optimize context cost": "Descriptions are always loaded; bodies load when triggered; "
        "extra files load only when read. Push detail down that ladder.",
    "Quality-gate exemplars": "Skills worth copying for their *shape*: they finish with a "
        "check that can fail, and they ask a reviewer without the author's context.",
    "Self-improving skills": "Systems that write or rewrite skills from experience. Treat "
        "every automatic edit as a pull request that needs a test.",
    "Discover & distribute": "Where skills are found and how they ship. Catalogs are large "
        "and unranked; plugins add updates and hooks.",
    "Vet & secure": "A skill runs with your agent's permissions. Scan it like a dependency.",
}
for s in STAGES:
    if not by_stage[s]:
        continue
    A(f"### {s}")
    A("")
    A(f"_{stage_blurb[s]}_")
    A("")
    for n in by_stage[s]:
        r = by_name[n]
        topics = ", ".join((r.get("topics") or [])[:6]) or "—"
        A(f"- **{link(n)}** · {fmt_int(r['stars'])}★ · {r.get('primary_language') or '—'} · "
          f"{r.get('lifecycle_stage', '—')} · health {r.get('health_score', '—')} · "
          f"last push {days_to_human(r.get('days_since_push'))} ago  ")
        A(f"  {TAXONOMY[n][1]}  ")
        A(f"  <sub>topics: {topics}</sub>")
    A("")

# --- Task rankings
A("## Task rankings")
A("")
A("| Task | 🥇 First pick | 🥈 Second | 🥉 Third | Evidence / note |")
A("|---|---|---|---|---|")
for task, picks, ev in TASK_RANKINGS:
    cells = [f"`{p}` — {note}" for p, note in picks]
    A(f"| **{task}** | {cells[0]} | {cells[1]} | {cells[2]} | {ev} |")
A("")

# --- Optimization loop (spotlight)
A("## Spotlight — a skill optimization loop")
A("")
A("Put together from the repos above. Each step names the tool that makes it concrete.")
A("")
A("1. **Baseline.** Write 5–10 real tasks the skill is meant to help with, plus 2–3 it "
  "should *not* fire on. Run them without the skill and keep the outputs "
  "(`waza run`, or `ctx` on your repo).")
A("2. **Write the smallest fix.** Add only what changes the failures you saw "
  "(`obra/superpowers`' test-first method; `mattpocock/skills` for size).")
A("3. **Tune the description.** It is the only part always in context and the only "
  "thing that triggers the skill: say what it does *and* when to use it, with the "
  "words a user would type. Check firing on both task sets (`waza spec verify`, `coverage`).")
A("4. **Push detail down.** Move reference material into separate files the body links "
  "to, so it loads only when needed (`book-to-skill`). Set a token budget and fail "
  "review when a change exceeds it (`waza tokens compare main --threshold 10`).")
A("5. **End with a gate.** The last step should be a check that can fail — a lint, a "
  "test, a browser render, a fresh-context review (`hallmark`, `fable-mode`).")
A("6. **Re-measure, then prune.** Compare against the baseline (`waza compare`). Delete "
  "skills that never fire or never help (`token-optimizer` finds unused ones).")
A("7. **Scan before sharing or installing** (`SkillSpector`).")
A("8. **Optional: feed failures back.** Turn recurring failures into new rules or skills "
  "(`ECC`, `OpenSpace`, `UpSkill`) — but each automatic change goes back to step 6.")
A("")

# --- Graph analysis
A("## Graph analysis — how they relate")
A("")
comm = {}
for n in present:
    nd = node_for(n)
    if nd is not None:
        comm.setdefault(nd.get("community"), []).append(n)
in_graph = sum(len(v) for v in comm.values())
A(f"**Community clustering.** {in_graph} of these {len(present)} repos are in the "
  f"similarity graph, spread over **{len(comm)} of its {len(gr['communities'])} "
  f"communities** — skills cut across the agent, design and security clusters rather "
  f"than forming one of their own.")
A("")
for c, names in sorted(comm.items(), key=lambda x: -len(x[1])):
    if len(names) >= 2:
        A(f"- **Community {c}** ({len(names)}): " + ", ".join(f"`{x}`" for x in names))
A("")
ranked = sorted([(node_for(n).get("pagerank", 0), n) for n in present if node_for(n)],
                key=lambda x: -x[0])
A("**Centrality (PageRank in the full graph):**")
A("")
for pr, n in ranked[:8]:
    A(f"- `{n}` — PageRank {pr:.4f}")
A("")
A("**Direct links between these repos:**")
A("")
if inter_edges:
    id_to_name = {v: k for k, v in name_to_nodeid.items()}
    for e in sorted(inter_edges, key=lambda x: -x["weight"])[:12]:
        a = id_to_name.get(e["source"], e["source"])
        b = id_to_name.get(e["target"], e["target"])
        why = []
        if e.get("shared_topics"):
            why.append("topics: " + ", ".join(e["shared_topics"][:4]))
        if e.get("shared_authors"):
            why.append("authors: " + ", ".join(e["shared_authors"][:3]))
        A(f"- `{a}` ⇄ `{b}` (w={e['weight']:.3f})" + (f" — {'; '.join(why)}" if why else ""))
else:
    A("- _None._ These tools link out to the agents they serve rather than to each other.")
A("")

# --- Maintenance & risk
A("## Maintenance & risk")
A("")
risky = [n for n in present
         if (by_name[n].get("health_score") or 100) < 50
         or (by_name[n].get("days_since_push") or 0) > 45
         or by_name[n].get("lifecycle_stage") in ("Declining", "Abandoned")]
if risky:
    A("| Repo | Stage | Health | Lifecycle | Last push |")
    A("|---|---|---|---|---|")
    for n in sorted(risky, key=lambda x: by_name[x].get("health_score") or 0):
        r = by_name[n]
        A(f"| {link(n)} | {stage_of(n)} | {r.get('health_score', '—')} | "
          f"{r.get('lifecycle_stage', '—')} | {days_to_human(r.get('days_since_push'))} ago |")
    A("")
    A("Watch items: the self-improving layer (`OpenSpace`, `UpSkill`) is where the most "
      "interesting ideas sit and also where maintenance is thinnest. Borrow the ideas; "
      "don't build on them without a fork plan.")
else:
    A("- _Nothing flagged._")
A("")

# --- Which one
A("## Which one should you use?")
A("")
A("- **You write your own skills (most people reading this):** `anthropics/skills` for "
  "the format → `microsoft/waza` to measure and budget them → `NVIDIA/SkillSpector` on "
  "anything you install from elsewhere.")
A("- **Your context feels heavy:** `alexgreensh/token-optimizer` to find unused skills, "
  "then split long bodies into on-demand files.")
A("- **Outputs look generic or unchecked:** copy the gate pattern from `Nutlope/hallmark` "
  "or `addyosmani/agent-skills` into your own skills.")
A("- **You want the cheapest setup that still works on your repo:** `stevesolun/ctx`.")
A("- **You want skills that learn:** `affaan-m/ECC` today; watch `HKUDS/OpenSpace`.")
A("")

# --- Adjacent
A("## Adjacent (not covered here)")
A("")
for n, why in ADJACENT:
    if n in by_name:
        A(f"- {link(n)} — {why}")
    else:
        A(f"- `{n}` — {why}")
A("")

# --- Methodology
A("## Methodology & caveats")
A("")
A("- **Source**: `data/classified.json` + `public/data/graph.json`. No external calls; "
  "fully reproducible.")
A("- **Selection**: keyword scan for skill / SKILL.md / skill eval, scan, registry, "
  "evolve across name, description, topics and README (157 hits), then hand-picked "
  "for repos that help *make skills better*, not for skill content.")
A("- **Claims** (token savings, vulnerability rates, benchmark deltas) are quoted from "
  f"each project's README in the `{gen[:10]}` snapshot and were not re-run here.")
A("- **Metrics** (health, lifecycle, last push) are precomputed at snapshot time and may "
  "lag GitHub.")
A("")
A(f"<sub>Repos covered: {len(present)} across {sum(1 for s in STAGES if by_stage[s])} "
  f"stages · Snapshot: {gen}</sub>")

with open(OUT, "w") as f:
    f.write("\n".join(lines) + "\n")

# --- Sidecar meta -------------------------------------------------------------
top = sorted(present, key=lambda x: -by_name[x]["stars"])[:5]
meta = {
    "slug": SLUG,
    "title": TITLE,
    "file": f"{SLUG}.md",
    "category": "AI / Agents",
    "summary": (f"{len(present)} repos ({fmt_int(total_stars)}★) for writing, measuring, "
                "slimming, gating, sharing, vetting and evolving agent skills — with task "
                "rankings and a step-by-step skill optimization loop."),
    "tool_count": len(present),
    "total_stars": total_stars,
    "categories": {s: len(by_stage[s]) for s in STAGES},
    "top_tools": [{"name": n, "stars": by_name[n]["stars"]} for n in top],
    "snapshot": gen,
    "generated": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
    "generator": f"scripts/reports/{SLUG.replace('-', '_')}.py",
}
with open(META_OUT, "w") as f:
    json.dump(meta, f, indent=2)

print(f"Wrote {OUT}")
print(f"Wrote {META_OUT}")
print(f"  tools: {len(present)} / {len(sel_names)}  "
      + " | ".join(f"{s.split()[0]}:{len(by_stage[s])}" for s in STAGES))
missing = [n for n in sel_names if n not in by_name]
if missing:
    print("  WARNING missing:", missing)
