// Visual looks for the 3D map. Each look is plain config; MapView and the sky
// layers read it, so adding a look means adding an entry here.

export const LOOKS = {
  classic: {
    id: 'classic',
    label: 'Classic',
    hint: 'The original map',
    custom: false, // render with react-force-graph's own spheres
  },
  deepsky: {
    id: 'deepsky',
    label: 'Deep Sky',
    hint: 'A real night sky. Colour shows the stage, twinkle shows activity',
    custom: true,
    background: '#02030a',
    // Stellar temperature: young and fast-growing burn hot, ageing repos cool.
    stageColor: {
      Hot: '#a9c4ff', Rising: '#d6e2ff', Classic: '#fff3dc',
      Mature: '#ffd68a', Declining: '#ff9a5a', Abandoned: '#b4503c',
    },
    stageBrightness: { Hot: 1.15, Rising: 1.05, Classic: 1, Mature: 0.9, Declining: 0.7, Abandoned: 0.42 },
    spikes: true, // diffraction cross on the brightest stars
    starSize: 7,
    bloom: { strength: 0.35, radius: 0.2, threshold: 0.8 },
    link: { color: '#c9d6ff', opacity: 0.018, highlight: '#ffe6b0', highlightOpacity: 0.75 },
    starfield: { count: 5000, color: '#cfd8ff', size: 1.6 },
    nebula: { opacity: 0.04 },
    rings: false,
    grid: false,
    labelStyle: {
      font: '"Geist Variable", system-ui, sans-serif', color: '#f3f0e6',
      background: 'rgba(0,0,0,0)', weight: '300', upper: false,
    },
    constellation: { color: 'rgba(214,226,255,0.55)', font: '"Geist Variable", system-ui, sans-serif', spacing: true },
    autoRotateSpeed: 0.18,
  },
  holo: {
    id: 'holo',
    label: 'Holo',
    hint: 'A calm, futuristic star chart',
    custom: true,
    background: '#01040c',
    stageColor: {
      Hot: '#5ef2ff', Rising: '#7cf8d0', Classic: '#8fb4ff',
      Mature: '#b48cff', Declining: '#ff7ad9', Abandoned: '#3d4a6b',
    },
    stageBrightness: { Hot: 1.1, Rising: 1.05, Classic: 0.95, Mature: 0.9, Declining: 0.7, Abandoned: 0.5 },
    spikes: false,
    ringed: true, // thin orbit ring around each star instead of spikes
    starSize: 6,
    bloom: { strength: 0.35, radius: 0.2, threshold: 0.75 },
    link: { color: '#3fd9ff', opacity: 0.03, highlight: '#9ffcff', highlightOpacity: 0.9 },
    starfield: { count: 2500, color: '#6fa8ff', size: 1.2 },
    nebula: { opacity: 0.02 },
    rings: true,
    grid: true,
    labelStyle: {
      font: '"Geist Mono Variable", ui-monospace, monospace', color: '#d6f7ff',
      background: 'rgba(2,14,26,0.82)', weight: '500', upper: true, size: 4.8, opacity: 1,
    },
    // Thin cyan at 60% washed out over the haze: near-white, heavier, outlined, on a dark plate
    constellation: {
      // spacing off: a hair space is a full cell wide in a monospace font
      color: 'rgba(205,245,255,0.92)', font: '"Geist Mono Variable", ui-monospace, monospace', spacing: false,
      weight: '500', stroke: { width: 0.25, color: 'rgba(0,10,20,0.85)' },
      background: 'rgba(2,14,26,0.62)', padding: 5, minHeight: 24,
    },
    autoRotateSpeed: 0.25,
  },
};

export const LOOK_IDS = Object.keys(LOOKS);

/** Load the web fonts a look draws into canvas textures. Browsers fetch a font only once
 *  the DOM uses it, so canvas text drawn earlier silently falls back (Courier, for mono). */
export function loadLookFonts(look) {
  if (!look.custom || typeof document === 'undefined' || !document.fonts?.load) return Promise.resolve();
  const specs = [
    `${look.labelStyle.weight} 32px ${look.labelStyle.font.split(',')[0]}`,
    `${look.constellation.weight ?? '300'} 32px ${look.constellation.font.split(',')[0]}`,
  ];
  return Promise.all(specs.map((s) => document.fonts.load(s).catch(() => null))).then(() => undefined);
}
const STORE_KEY = 'astrolab.map.look';

export function initialLook() {
  try {
    const q = new URLSearchParams(window.location.search).get('look');
    if (q && LOOKS[q]) return q;
  } catch { /* no window */ }
  try {
    const s = window.localStorage.getItem(STORE_KEY);
    if (s && LOOKS[s]) return s;
  } catch { /* storage blocked */ }
  return 'deepsky';
}

export function rememberLook(id) {
  try { window.localStorage.setItem(STORE_KEY, id); } catch { /* storage blocked */ }
}

// Topics too generic to name a constellation after.
const GENERIC = new Set([
  'python', 'javascript', 'typescript', 'go', 'golang', 'rust', 'java', 'ai',
  'hacktoberfest', 'machine-learning', 'deep-learning', 'open-source', 'react', 'nodejs',
]);

export function constellationName(community) {
  const topics = community?.top_topics ?? [];
  const specific = topics.filter((t) => !GENERIC.has(t));
  // Drop topics that only restate another ("claude" next to "claude-code")
  const pool = (specific.length ? specific : topics)
    .filter((t, _, all) => !all.some((o) => o !== t && o.includes(t)));
  const pick = pool.slice(0, 2);
  if (!pick.length) return community?.top_language ?? 'Unnamed';
  return pick.map((t) => t.replace(/-/g, ' ')).join(' · ');
}
