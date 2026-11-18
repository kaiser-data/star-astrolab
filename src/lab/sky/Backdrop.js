// Scene dressing behind the repo stars: distant starfield, a nebula haze per
// constellation, floating constellation names, and Holo's rings and grid.
// Everything is non-pickable and costs a few dozen draw calls in total.
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import { constellationName } from './looks';

let glowTexture = null;
function getGlowTexture() {
  if (glowTexture) return glowTexture;
  const s = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  glowTexture = new THREE.CanvasTexture(cv);
  return glowTexture;
}

const noPick = (o) => { o.raycast = () => {}; return o; };

/** Community centroids and spread from the nodes currently in view. */
export function communityCentres(nodes, communities) {
  const acc = new Map();
  for (const n of nodes) {
    const k = String(n.community);
    const a = acc.get(k) ?? { x: 0, y: 0, z: 0, n: 0, nodes: [] };
    a.x += n.x ?? 0; a.y += n.y ?? 0; a.z += n.z ?? 0; a.n += 1; a.nodes.push(n);
    acc.set(k, a);
  }
  const out = [];
  for (const [id, a] of acc) {
    const c = { x: a.x / a.n, y: a.y / a.n, z: a.z / a.n };
    let r = 0;
    for (const n of a.nodes) r += Math.hypot((n.x ?? 0) - c.x, (n.y ?? 0) - c.y, (n.z ?? 0) - c.z);
    const brightest = a.nodes.reduce((b, n) => ((n.stars ?? 0) > (b.stars ?? 0) ? n : b), a.nodes[0]);
    const meta = communities?.[id] ?? {};
    out.push({
      id, centre: c, spread: r / a.n, count: a.n, brightest,
      color: meta.color ?? '#8899ff', name: constellationName(meta), topics: meta.top_topics ?? [],
    });
  }
  return out.sort((a, b) => b.count - a.count);
}

export function buildBackdrop(look, centres, bounds) {
  const group = new THREE.Group();
  group.name = 'sky-backdrop';
  group.renderOrder = 0;

  // Distant starfield on a shell well outside the graph
  {
    const { count, color, size } = look.starfield;
    const pos = new Float32Array(count * 3);
    const R = Math.max(9000, bounds.radius * 4);
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1;
      const t = Math.random() * Math.PI * 2;
      const r = R * (0.85 + Math.random() * 0.3);
      const s = Math.sqrt(1 - u * u);
      pos.set([r * s * Math.cos(t), r * u, r * s * Math.sin(t)], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({
      color, size, sizeAttenuation: false, transparent: true, opacity: 0.7,
      depthWrite: false, map: getGlowTexture(), blending: THREE.AdditiveBlending,
    });
    const pts = noPick(new THREE.Points(g, m));
    pts.frustumCulled = false;
    group.add(pts);
  }

  // Nebula haze, tinted by constellation colour
  for (const c of centres.filter((x) => x.count >= 8)) {
    const m = new THREE.SpriteMaterial({
      map: getGlowTexture(), color: c.color, transparent: true, opacity: look.nebula.opacity,
      depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const s = noPick(new THREE.Sprite(m));
    const scale = Math.max(220, c.spread * 2.2);
    s.scale.set(scale, scale, 1);
    s.position.set(c.centre.x, c.centre.y, c.centre.z);
    group.add(s);
  }

  // Constellation names for the larger groups
  // One name per constellation: skip repeats (several groups share top topics)
  const seen = new Set();
  const named = centres.filter((c) => (seen.has(c.name) ? false : seen.add(c.name))).slice(0, 10);
  for (const c of named) {
    const upper = c.name.toUpperCase();
    const text = look.constellation.spacing ? upper.split('').join(' ') : upper;
    const t = noPick(new SpriteText(text));
    const cs = look.constellation;
    t.fontFace = cs.font;
    t.fontWeight = cs.weight ?? '300';
    t.color = cs.color;
    // Optional dark outline and backing panel: keeps names legible over haze, links and bloom
    if (cs.stroke) { t.strokeWidth = cs.stroke.width; t.strokeColor = cs.stroke.color; }
    if (cs.background) { t.backgroundColor = cs.background; t.padding = cs.padding ?? 4; t.borderRadius = 3; }
    t.textHeight = Math.max(cs.minHeight ?? 18, Math.min(42, c.spread * 0.14));
    t.material.depthWrite = false;
    t.material.depthTest = false;
    t.renderOrder = 5;
    t.position.set(c.centre.x, c.centre.y + c.spread * 0.9 + 30, c.centre.z);
    t.userData.constellation = c.id;
    group.add(t);
  }

  if (look.rings) {
    const mat = new THREE.LineBasicMaterial({
      color: '#3fd9ff', transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    [0.55, 0.85, 1.15].forEach((f, i) => {
      const pts = [];
      const r = bounds.radius * f;
      for (let k = 0; k <= 256; k++) {
        const a = (k / 256) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
      }
      const ring = noPick(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
      ring.position.set(bounds.centre.x, bounds.centre.y, bounds.centre.z);
      ring.rotation.set(0.35 + i * 0.25, i * 0.6, 0.15 * i);
      ring.userData.spin = 0.004 + i * 0.002;
      group.add(ring);
    });
  }

  if (look.grid) {
    const size = bounds.radius * 4;
    const grid = noPick(new THREE.GridHelper(size, 40, '#1aa6ff', '#0b3a66'));
    grid.material.transparent = true;
    grid.material.opacity = 0.14;
    grid.material.depthWrite = false;
    grid.position.set(bounds.centre.x, bounds.centre.y - bounds.radius * 1.1, bounds.centre.z);
    group.add(grid);
  }

  return group;
}

export function tickBackdrop(group, dt) {
  if (!group) return;
  for (const o of group.children) if (o.userData.spin) o.rotation.y += o.userData.spin * dt;
}

export function disposeBackdrop(group) {
  if (!group) return;
  group.traverse((o) => {
    o.geometry?.dispose?.();
    if (o.material && o.material.map !== glowTexture) o.material.map?.dispose?.();
    o.material?.dispose?.();
  });
}

export function boundsOf(nodes) {
  if (!nodes.length) return { centre: { x: 0, y: 0, z: 0 }, radius: 1000 };
  let x = 0, y = 0, z = 0;
  for (const n of nodes) { x += n.x ?? 0; y += n.y ?? 0; z += n.z ?? 0; }
  const c = { x: x / nodes.length, y: y / nodes.length, z: z / nodes.length };
  const d = nodes.map((n) => Math.hypot((n.x ?? 0) - c.x, (n.y ?? 0) - c.y, (n.z ?? 0) - c.z)).sort((a, b) => a - b);
  return { centre: c, radius: d[Math.floor(d.length * 0.9)] || 1000 };
}
