// All repo stars in one THREE.Points draw call. Glow, twinkle, halo and the
// time-lapse flare are computed in the shader; per-frame JS work is only
// copying node positions (they move when the layout is re-simulated).
import * as THREE from 'three';

const VERT = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aBright;
  attribute float aRate;
  attribute float aPhase;
  attribute float aHalo;
  attribute float aBorn;
  attribute float aDim;
  attribute float aBig;
  uniform float uTime;
  uniform float uScale;
  uniform float uReveal;
  uniform float uGain;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vHalo;
  varying float vBig;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // Calm twinkle: slow, shallow, faster for repos with more recent commits.
    float tw = 1.0 - 0.28 * aRate * (0.5 + 0.5 * sin(uTime * (0.35 + 2.2 * aRate) + aPhase));
    // Time-lapse: hidden until born, then a short flare.
    float t = uReveal - aBorn;
    float born = step(0.0, t);
    float flare = born * exp(-max(t, 0.0) * 45.0);
    vColor = mix(aColor, vec3(1.0), flare * 0.8);
    vAlpha = aBright * tw * born * mix(1.0, 0.12, aDim) * (1.0 + 2.5 * flare);
    vHalo = aHalo;
    vBig = aBig;
    float px = aSize * (1.0 + 2.0 * flare) * uScale / max(-mv.z, 1.0);
    // Magnitude: stars that are small on screen give off less light, so a
    // dense core reads as a glittering cluster instead of a white blob.
    float k = clamp(px / 16.0, 0.0, 1.0);
    vAlpha *= uGain * max(k * k, 0.025); // ~area: per-pixel light stays constant
    gl_PointSize = max(px, 1.5);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  uniform float uSpikes;
  uniform float uRinged;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vHalo;
  varying float vBig;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(0.16, 0.0, d);
    float glow = exp(-d * d * 12.0) * 0.4;
    float a = core + glow;
    // Diffraction spikes on bright stars (Deep Sky)
    float sp = (max(0.0, 1.0 - abs(uv.x) * 70.0) + max(0.0, 1.0 - abs(uv.y) * 70.0)) * (1.0 - d);
    a += uSpikes * vBig * sp * 0.5;
    // Thin orbit ring (Holo)
    a += uRinged * smoothstep(0.035, 0.0, abs(d - 0.62)) * 0.45;
    // Momentum halo: a soft outer ring for the fastest-growing repos
    a += vHalo * smoothstep(0.06, 0.0, abs(d - 0.85)) * 0.5;
    vec3 col = vColor * (0.55 + 0.45 * core) + vec3(core * 0.35);
    gl_FragColor = vec4(col, a * vAlpha);
  }
`;

export class StarLayer {
  constructor() {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime: { value: 0 }, uScale: { value: 400 }, uReveal: { value: 2 }, uGain: { value: 0.6 },
        uSpikes: { value: 0 }, uRinged: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false; // positions change without bounds updates
    this.points.raycast = () => {}; // picking stays on the library's node proxies
    this.points.renderOrder = 2;
    this.nodes = [];
    this.index = new Map();
  }

  setNodes(nodes, look) {
    this.nodes = nodes;
    this.index = new Map(nodes.map((n, i) => [n.id, i]));
    const N = nodes.length;
    const pos = new Float32Array(N * 3);
    const size = new Float32Array(N);
    const color = new Float32Array(N * 3);
    const bright = new Float32Array(N);
    const rate = new Float32Array(N);
    const phase = new Float32Array(N);
    const halo = new Float32Array(N);
    const born = new Float32Array(N);
    const dim = new Float32Array(N);
    const big = new Float32Array(N);
    const valCut = nodes.map((n) => n.val || 0).sort((a, b) => b - a)[Math.floor(N * 0.04)] ?? Infinity;

    const momentum = nodes.map((n) => n.momentum?.estimated_stars_30d ?? 0);
    const haloCut = [...momentum].sort((a, b) => b - a)[Math.floor(N * 0.1)] ?? Infinity;
    const maxAge = Math.max(1, ...nodes.map((n) => n.age_days ?? 0));
    const c = new THREE.Color();

    nodes.forEach((n, i) => {
      pos.set([n.x ?? 0, n.y ?? 0, n.z ?? 0], i * 3);
      // World-space diameter ≈ the Classic sphere plus room for the glow
      size[i] = Math.cbrt(n.val || 1) * look.starSize * 2.2;
      c.set(look.stageColor[n.lifecycle_stage] ?? '#ffffff');
      color.set([c.r, c.g, c.b], i * 3);
      const m = Math.min(1, Math.log1p(momentum[i]) / Math.log1p(2000));
      bright[i] = (look.stageBrightness[n.lifecycle_stage] ?? 0.8) * (0.75 + 0.45 * m);
      rate[i] = Math.min(1, Math.log1p(n.commits_90d ?? 0) / Math.log1p(1000));
      phase[i] = (i * 2.399963) % (Math.PI * 2); // golden-angle spread, stable across reloads
      halo[i] = momentum[i] >= haloCut && momentum[i] > 0 ? 1 : 0;
      born[i] = 1 - (n.age_days ?? 0) / maxAge; // 0 = oldest repo, 1 = today
      dim[i] = 0;
      big[i] = (n.val || 0) >= valCut ? 1 : 0;
    });

    const g = this.geometry;
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    g.setAttribute('aBright', new THREE.BufferAttribute(bright, 1));
    g.setAttribute('aRate', new THREE.BufferAttribute(rate, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    g.setAttribute('aHalo', new THREE.BufferAttribute(halo, 1));
    g.setAttribute('aBorn', new THREE.BufferAttribute(born, 1));
    g.setAttribute('aDim', new THREE.BufferAttribute(dim, 1));
    g.setAttribute('aBig', new THREE.BufferAttribute(big, 1));
    this.material.uniforms.uSpikes.value = look.spikes ? 1 : 0;
    this.material.uniforms.uRinged.value = look.ringed ? 1 : 0;
  }

  /** Dim everything not in `ids` (a Set), or clear dimming when empty. */
  setFocus(ids) {
    const attr = this.geometry.getAttribute('aDim');
    if (!attr) return;
    const any = ids && ids.size > 0;
    this.nodes.forEach((n, i) => { attr.array[i] = any && !ids.has(n.id) ? 1 : 0; });
    attr.needsUpdate = true;
  }

  /** 0..1 position on the creation-date timeline; >1 shows everything. */
  setReveal(v) { this.material.uniforms.uReveal.value = v; }

  /** Born value (0..1) of the oldest node at which `n` appears. */
  bornOf(node) {
    const i = this.index.get(node.id);
    const attr = this.geometry.getAttribute('aBorn');
    return i == null || !attr ? 0 : attr.array[i];
  }

  tick(time, camera, renderer) {
    const attr = this.geometry.getAttribute('position');
    if (attr) {
      const a = attr.array;
      for (let i = 0; i < this.nodes.length; i++) {
        const n = this.nodes[i];
        a[i * 3] = n.x ?? 0; a[i * 3 + 1] = n.y ?? 0; a[i * 3 + 2] = n.z ?? 0;
      }
      attr.needsUpdate = true;
    }
    const u = this.material.uniforms;
    u.uTime.value = time;
    if (camera && renderer) {
      const h = renderer.domElement.height; // drawing-buffer px, includes pixel ratio
      u.uScale.value = h / (2 * Math.tan((camera.fov * Math.PI) / 360));
    }
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
