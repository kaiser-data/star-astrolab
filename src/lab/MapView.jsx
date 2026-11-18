import React, { useCallback, useEffect, useRef, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import { forceManyBody, forceLink } from 'd3-force-3d';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { useGraph } from './GraphProvider';
import { LOOKS, initialLook, rememberLook, loadLookFonts } from './sky/looks';
import { StarLayer } from './sky/StarLayer';
import { buildBackdrop, tickBackdrop, disposeBackdrop, communityCentres, boundsOf } from './sky/Backdrop';
import { useTour } from './sky/useTour';
import { LookSwitcher, TourCaption, TimelapseBar } from './sky/SkyControls';

const RENDERER_CONFIG = { powerPreference: 'high-performance', antialias: true };

// In the custom looks the visible stars are drawn by StarLayer; each node keeps
// an undrawn proxy sphere so the library's hover/click picking still works
// (three's raycaster ignores material visibility; the renderer skips it).
const PROXY_GEOMETRY = new THREE.SphereGeometry(1, 8, 6);
const PROXY_MATERIAL = new THREE.MeshBasicMaterial({ visible: false });

function lineMaterial(color, opacity) {
  return new THREE.LineBasicMaterial({
    color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}
const NO_ITEMS = []; // stable default: a fresh [] per render re-fires effects
const IS_DESKTOP = () => typeof window === 'undefined' || window.matchMedia('(min-width: 768px)').matches;

function ControlPanel({ settings, setSettings, onRecenter }) {
  const upd = (k, v) => setSettings((s) => ({ ...s, [k]: v }));
  const Row = ({ label, children }) => (
    <div className="grid grid-cols-3 items-center gap-2 py-1">
      <span className="text-[11px] text-gray-400 col-span-1">{label}</span>
      <div className="col-span-2">{children}</div>
    </div>
  );
  // Open on desktop; on phones the panel would cover the whole map, so it
  // starts folded behind a button.
  const [open, setOpen] = React.useState(
    () => typeof window === 'undefined' || window.matchMedia('(min-width: 768px)').matches,
  );
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="absolute top-3 right-3 z-10 bg-gray-900/95 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-200 shadow-xl"
      >Settings</button>
    );
  }
  return (
    <div className="absolute top-3 right-3 z-10 bg-gray-900/95 border border-gray-700 rounded-lg p-3 text-xs text-gray-200 shadow-xl w-[260px] max-w-[calc(100%-1.5rem)] max-h-[calc(100%-1.5rem)] overflow-y-auto">
      <button onClick={() => setOpen(false)} className="w-full mb-2 px-3 py-1 text-gray-400 hover:text-white border border-gray-700 rounded-md">Hide settings</button>
      <button onClick={onRecenter} className="w-full mb-2 px-3 py-1.5 bg-white hover:bg-gray-200 rounded-md text-black font-medium">Recenter view</button>
      <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Layout</div>
      <Row label="Spread"><input type="range" min={-300} max={-30} step={5} value={settings.charge} onChange={(e) => upd('charge', Number(e.target.value))} className="w-full" /></Row>
      <Row label="Distance between linked"><input type="range" min={20} max={200} step={5} value={settings.linkDistance} onChange={(e) => upd('linkDistance', Number(e.target.value))} className="w-full" /></Row>
      <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-3 mb-1">Filter</div>
      <Row label={`Min stars (${settings.minStars.toLocaleString()})`}>
        <input type="range" min={0} max={2000} step={50} value={settings.minStars} onChange={(e) => upd('minStars', Number(e.target.value))} className="w-full" />
      </Row>
      <Row label="Hide abandoned"><input type="checkbox" checked={settings.hideAbandoned} onChange={(e) => upd('hideAbandoned', e.target.checked)} /></Row>
      <Row label="Hide declining"><input type="checkbox" checked={settings.hideDeclining} onChange={(e) => upd('hideDeclining', e.target.checked)} /></Row>
      <Row label="Show links"><input type="checkbox" checked={settings.showLinks} onChange={(e) => upd('showLinks', e.target.checked)} /></Row>
      <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-3 mb-1">Display</div>
      <Row label="Label density"><input type="range" min={1} max={12} step={0.5} value={settings.labelDensity} onChange={(e) => upd('labelDensity', Number(e.target.value))} className="w-full" /></Row>
      <Row label="Labels always"><input type="checkbox" checked={settings.alwaysLabels} onChange={(e) => upd('alwaysLabels', e.target.checked)} /></Row>
      <Row label="Thick links"><input type="checkbox" checked={settings.thickLinks} onChange={(e) => upd('thickLinks', e.target.checked)} /></Row>
      <Row label="Drag stars"><input type="checkbox" checked={settings.drag} onChange={(e) => upd('drag', e.target.checked)} /></Row>
      <Row label="Auto-rotate"><input type="checkbox" checked={settings.autoRotate} onChange={(e) => upd('autoRotate', e.target.checked)} /></Row>
      <Row label="Glow"><input type="checkbox" checked={settings.glow} onChange={(e) => upd('glow', e.target.checked)} /></Row>
      <div className="text-[10px] text-gray-500 mt-3 leading-snug">Drag to turn · Right-drag to move · Scroll to zoom · Click a star to open it</div>
    </div>
  );
}

export default function MapView({ onSelectNode, focusedRepoName }) {
  const fgRef = useRef(null);
  const containerRef = useRef(null);
  const { status, nodes = NO_ITEMS, links = NO_ITEMS, stats, error, communities } = useGraph();
  const [lookId, setLookIdRaw] = useState(initialLook);
  const look = LOOKS[lookId];
  const setLook = useCallback((id) => { setLookIdRaw(id); rememberLook(id); }, []);
  // null = off, otherwise 0..1 along the repo-creation timeline
  const [timelapse, setTimelapse] = useState(null);
  // Bumps once the look's fonts are loaded, so label textures are redrawn in the right font
  const [fontsReady, setFontsReady] = useState(0);
  useEffect(() => {
    let alive = true;
    loadLookFonts(look).then(() => alive && setFontsReady((n) => n + 1));
    return () => { alive = false; };
  }, [look]);
  // Boolean twin: accessors depend on this so they don't change identity (and
  // force a full re-digest of links/labels) on every time-lapse frame.
  const timelapseOn = timelapse != null;
  const starLayer = useRef(null);
  const backdrop = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [size, setSize] = useState({ w: 1200, h: 720 });
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [settings, setSettings] = useState({
    charge: -120, linkDistance: 60, alwaysLabels: false, drag: false, autoRotate: false,
    // Bloom is a full-screen pass; on phones it starts off.
    glow: IS_DESKTOP(),
    // 5 renders ~1.1k label sprites (one canvas texture each); 7 cuts that to
    // ~400 while still labelling everything structurally significant.
    labelDensity: 7,
    // Filtering defaults: the long tail of low-star and abandoned repos costs a
    // draw call each while carrying almost no signal. Trimmed by default; the
    // full corpus is one slider away.
    minStars: 100, hideAbandoned: true, hideDeclining: false,
    // Links as thin lines (1 draw call each) rather than cylinder meshes.
    showLinks: true, thickLinks: false,
  });

  // Apply filters before the graph ever reaches three.js. Links are kept only
  // when both endpoints survive, otherwise the force layout gets dangling refs.
  const view = React.useMemo(() => {
    const keep = new Set();
    for (const n of nodes) {
      if ((n.stars ?? 0) < settings.minStars) continue;
      if (settings.hideAbandoned && n.lifecycle_stage === 'Abandoned') continue;
      if (settings.hideDeclining && n.lifecycle_stage === 'Declining') continue;
      keep.add(n.id);
    }
    const id = (e) => (typeof e === 'object' ? e.id : e);
    return {
      nodes: nodes.filter((n) => keep.has(n.id)),
      links: settings.showLinks
        ? links.filter((l) => keep.has(id(l.source)) && keep.has(id(l.target)))
        : [],
    };
  }, [nodes, links, settings.minStars, settings.hideAbandoned, settings.hideDeclining, settings.showLinks]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      setSize({ w: Math.max(280, cr.width), h: Math.max(320, cr.height) });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  // The container only mounts once the graph is ready (loading renders a
  // placeholder), so re-attach then; with [] the observer never ran and the
  // canvas stayed at its 1200px default — off-centre on phones.
  }, [status]);

  // The layout starts frozen at the pre-computed positions (cooldownTicks 0).
  // Touching a layout slider is the one case where re-simulating is wanted, so
  // wake the engine for a bounded burst and let it settle again.
  const [simTicks, setSimTicks] = useState(0);
  const firstLayoutRun = useRef(true);
  useEffect(() => {
    if (!fgRef.current || !nodes.length) return;
    fgRef.current.d3Force('charge')?.strength(settings.charge);
    fgRef.current.d3Force('link')?.distance(settings.linkDistance);
    if (firstLayoutRun.current) { firstLayoutRun.current = false; return; }
    setSimTicks(60);
    fgRef.current.d3ReheatSimulation?.();
  }, [settings.charge, settings.linkDistance]);

  useEffect(() => {
    if (fgRef.current?.refresh) fgRef.current.refresh();
  }, [settings.labelDensity, settings.alwaysLabels, highlightNodes]);

  // Custom looks frame the dense 90% of stars rather than every outlier, so
  // the sky fills the view instead of sitting as a small ball in the middle.
  const recenter = () => {
    const fg = fgRef.current;
    if (!fg) return;
    if (!look.custom || !view.nodes.length) { fg.zoomToFit?.(800, 80); return; }
    const { centre, radius } = boundsOf(view.nodes);
    const d = radius * 1.9;
    fg.cameraPosition({ x: centre.x + d * 0.35, y: centre.y + d * 0.25, z: centre.z + d }, centre, 800);
  };

  // On a 2× display the drawing buffer is 4× the pixels for no visible gain on a
  // graph of flat-shaded spheres — cap it and hand the fragment budget back.
  useEffect(() => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    const r = fgRef.current?.renderer?.();
    if (r?.setPixelRatio) r.setPixelRatio(ratio);
    // The composer copies the ratio at creation; without this its render
    // targets stay at full device resolution.
    fgRef.current?.postProcessingComposer?.()?.setPixelRatio?.(ratio);
  }, [nodes.length]);

  // ── Sky looks: star layer + backdrop, rebuilt when the look or the filtered
  // node set changes. One rAF loop drives twinkle, rings and position sync.
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg || !look.custom || !view.nodes.length) return undefined;
    const scene = fg.scene();
    const layer = new StarLayer();
    layer.setNodes(view.nodes, look);
    scene.add(layer.points);
    starLayer.current = layer;
    const centres = communityCentres(view.nodes, communities);
    const group = buildBackdrop(look, centres, boundsOf(view.nodes));
    scene.add(group);
    backdrop.current = group;

    let raf = 0;
    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      layer.tick(now / 1000, fg.camera(), fg.renderer());
      tickBackdrop(group, dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      scene.remove(layer.points);
      scene.remove(group);
      layer.dispose();
      disposeBackdrop(group);
      if (starLayer.current === layer) starLayer.current = null;
      if (backdrop.current === group) backdrop.current = null;
    };
  }, [look, view.nodes, communities, fontsReady]);

  // Bloom pass, only in looks that define one and when Glow is on
  useEffect(() => {
    const fg = fgRef.current;
    const composer = fg?.postProcessingComposer?.();
    if (!composer || !look.custom || !look.bloom || !settings.glow) return undefined;
    const { strength, radius, threshold } = look.bloom;
    const pass = new UnrealBloomPass(new THREE.Vector2(size.w, size.h), strength, radius, threshold);
    composer.addPass(pass);
    return () => { composer.removePass(pass); pass.dispose(); };
  }, [look, settings.glow, size.w, size.h, status]);

  useEffect(() => { starLayer.current?.setFocus(highlightNodes); }, [highlightNodes, look, view.nodes]);
  useEffect(() => { starLayer.current?.setReveal(timelapse ?? 2); }, [timelapse, look, view.nodes]);
  useEffect(() => { if (!look.custom) setTimelapse(null); }, [look]);

  // Constellation names fade out while a repo is focused
  useEffect(() => {
    const g = backdrop.current;
    if (!g) return;
    for (const o of g.children) if (o.userData.constellation != null) o.visible = highlightNodes.size === 0 && !timelapseOn;
  }, [highlightNodes, timelapseOn, look, view.nodes]);

  const getCentres = useCallback(() => communityCentres(view.nodes, communities), [view.nodes, communities]);
  const tour = useTour(fgRef, getCentres);

  useEffect(() => {
    if (!nodes.length) return;
    const ts = [setTimeout(recenter, 400), setTimeout(recenter, 1800)];
    return () => ts.forEach(clearTimeout);
  // recenter reads the current look, so re-frame when the look changes too
  }, [nodes, lookId]);

  useEffect(() => {
    if (!fgRef.current) return;
    const controls = fgRef.current.controls?.();
    if (!controls) return;
    controls.autoRotate = settings.autoRotate;
    controls.autoRotateSpeed = look.autoRotateSpeed ?? 0.8;
  }, [settings.autoRotate, look]);

  useEffect(() => {
    if (!fgRef.current || !focusedRepoName) {
      // Keep the same Set when already empty: a fresh Set every run re-renders,
      // which re-runs this effect — an update loop while the graph loads.
      setHighlightLinks((cur) => (cur.size ? new Set() : cur));
      setHighlightNodes((cur) => (cur.size ? new Set() : cur));
      return;
    }
    const node = nodes.find((n) => n.full_name === focusedRepoName);
    if (!node) return;
    const neighbors = new Set([node.id]);
    const lset = new Set();
    for (const l of links) {
      const sId = typeof l.source === 'object' ? l.source.id : l.source;
      const tId = typeof l.target === 'object' ? l.target.id : l.target;
      if (sId === node.id) { neighbors.add(tId); lset.add(l); }
      else if (tId === node.id) { neighbors.add(sId); lset.add(l); }
    }
    setHighlightNodes(neighbors);
    setHighlightLinks(lset);
    if (node.x != null && fgRef.current?.cameraPosition) {
      const dist = 140;
      const distRatio = 1 + dist / Math.hypot(node.x, node.y, node.z || 1);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: (node.z ?? 0) * distRatio },
        node, 1000,
      );
    }
  }, [focusedRepoName, nodes, links]);

  // Accessors are memoised: react-force-graph re-applies any accessor whose
  // identity changes, and a fresh nodeThreeObject rebuilds every label texture.
  // Without this, each hover (a state change) re-created ~400 canvas sprites.
  const showLabels = !timelapseOn;
  const nodeThreeObject = useCallback((node) => {
    const radius = Math.cbrt(node.val || 1) * 6;
    let proxy = null;
    if (look.custom) {
      proxy = new THREE.Mesh(PROXY_GEOMETRY, PROXY_MATERIAL);
      proxy.scale.setScalar(radius);
    }
    const wantLabel = showLabels
      && (settings.alwaysLabels || node.val >= settings.labelDensity)
      && !(highlightNodes.size > 0 && !highlightNodes.has(node.id));
    if (!wantLabel) return proxy;
    const name = node.full_name?.split('/')[1] ?? node.full_name ?? '';
    const short = name.length > 22 ? name.slice(0, 22) + '…' : name;
    const sprite = new SpriteText(look.custom && look.labelStyle.upper ? short.toUpperCase() : short);
    if (look.custom) {
      sprite.fontFace = look.labelStyle.font;
      sprite.fontWeight = look.labelStyle.weight;
      sprite.color = look.labelStyle.color;
      sprite.backgroundColor = look.labelStyle.background;
      sprite.padding = 2;
      sprite.borderRadius = 2;
      sprite.textHeight = look.labelStyle.size ?? 4.2;
      sprite.material.opacity = look.labelStyle.opacity ?? 0.85;
    } else {
      sprite.color = '#f1f5f9';
      sprite.backgroundColor = 'rgba(11,14,23,0.85)';
      sprite.padding = 3;
      sprite.borderRadius = 4;
      sprite.textHeight = 5;
    }
    sprite.raycast = () => {}; // labels never take hover/click; skip them in picking
    if (proxy) {
      // child of a scaled proxy: undo the scale
      sprite.scale.divideScalar(radius);
      sprite.position.set(0, 1 + 6 / radius, 0);
      proxy.add(sprite);
      return proxy;
    }
    sprite.position.set(0, Math.cbrt(node.val) * 1.6 + 5, 0);
    return sprite;
  }, [settings.alwaysLabels, settings.labelDensity, highlightNodes, look, showLabels, fontsReady]);

  // Shared additive line materials per look (normal / highlighted / dimmed)
  const linkMats = React.useMemo(() => {
    if (!look.custom) return null;
    const l = look.link;
    return {
      normal: lineMaterial(l.color, l.opacity),
      hi: lineMaterial(l.highlight, l.highlightOpacity),
      dim: lineMaterial(l.color, l.opacity * 0.25),
    };
  }, [look]);
  useEffect(() => () => linkMats && Object.values(linkMats).forEach((m) => m.dispose()), [linkMats]);
  const linkMaterial = useCallback((l) => {
    if (!linkMats) return null;
    if (highlightLinks.size > 0) return highlightLinks.has(l) ? linkMats.hi : linkMats.dim;
    return linkMats.normal;
  }, [linkMats, highlightLinks]);
  const linkVisible = useCallback(() => !timelapseOn, [timelapseOn]);
  const particleColor = useCallback(() => (look.custom ? look.link.highlight : 'rgba(96,165,250,1)'), [look]);

  const nodeColor = useCallback((n) => {
    const isHighlight = highlightNodes.size === 0 || highlightNodes.has(n.id);
    return isHighlight ? (n.color ?? '#3b82f6') : 'rgba(75,85,99,0.3)';
  }, [highlightNodes]);

  const linkColor = useCallback((l) => {
    if (highlightLinks.size > 0) return highlightLinks.has(l) ? 'rgba(96,165,250,0.9)' : 'rgba(75,85,99,0.04)';
    return 'rgba(148,163,184,0.16)';
  }, [highlightLinks]);

  const linkParticles = useCallback((l) => (highlightLinks.has(l) ? 3 : 0), [highlightLinks]);
  const linkWidth = useCallback((l) => 0.3 + Math.min(2, l.weight * 0.5), []);
  const handleHover = useCallback((node) => setHovered(node || null), []);
  const handleClick = useCallback((node) => onSelectNode && onSelectNode({ full_name: node.full_name }), [onSelectNode]);
  const handleBackground = useCallback(() => onSelectNode && onSelectNode(null), [onSelectNode]);

  if (status === 'loading') return <div className="text-gray-400 p-6">Loading graph…</div>;
  if (status === 'error') return <div className="text-red-400 p-6">Failed: {error}</div>;

  return (
    <div className="relative">
      <div className="absolute top-3 left-3 z-10 flex flex-col items-start gap-2 max-w-[calc(100%-7rem)] md:max-w-[calc(100%-300px)] pointer-events-none">
      <div className="pointer-events-auto bg-gray-900/95 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 shadow-xl">
        <div>
          {view.nodes.length.toLocaleString()} repos · {view.links.length.toLocaleString()} edges · {stats?.communityCount} communities
          {view.nodes.length < (stats?.nodeCount ?? 0) && (
            <span className="text-gray-500"> (of {stats.nodeCount.toLocaleString()})</span>
          )}
        </div>
        <div className="hidden sm:block text-gray-500 mt-1">
          {look.custom
            ? 'Colour = life stage (hot blue → fading red) · Twinkle = recent commits · Ring = growing fast · Size = stars and reliance'
            : 'Colour = constellation · Size = stars and how much other projects rely on it'}
        </div>
        {focusedRepoName && <div className="mt-1 text-blue-300">Focused: {focusedRepoName}</div>}
      </div>
  <LookSwitcher
        look={lookId}
        setLook={setLook}
        touring={tour.running}
        onTour={() => (tour.running ? tour.stop() : tour.start())}
        timelapseOn={timelapseOn}
        onTimelapse={() => setTimelapse((t) => (t == null ? 0 : null))}
      />
      </div>
      <ControlPanel settings={settings} setSettings={setSettings} onRecenter={recenter} />
      <TourCaption caption={tour.caption} />
      {timelapseOn && (
        <TimelapseBar
          value={timelapse}
          setValue={setTimelapse}
          maxAgeDays={Math.max(1, ...view.nodes.map((n) => n.age_days ?? 0))}
          onClose={() => setTimelapse(null)}
        />
      )}
      {hovered && (
        <div className="absolute bottom-3 left-3 z-10 bg-gray-900/95 border border-gray-700 rounded-lg p-4 text-sm text-gray-100 max-w-[calc(100%-1.5rem)] md:max-w-md shadow-xl pointer-events-none">
          <div className="font-bold text-blue-400">{hovered.full_name}</div>
          <div className="text-xs text-gray-400 mt-1">{hovered.description?.slice(0, 200)}</div>
          <div className="flex flex-wrap gap-3 mt-3 text-xs">
            <span className="px-2 py-0.5 rounded bg-gray-700">{hovered.lifecycle_stage}</span>
            <span>★ {hovered.stars?.toLocaleString()}</span>
            <span>health {hovered.health_score}</span>
            <span>authors90 {hovered.unique_authors_90d}</span>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        onPointerDown={() => tour.running && tour.stop()}
        onWheel={() => tour.running && tour.stop()}
        style={{
          width: '100%', height: 'min(78vh, 78dvh)', borderRadius: 12, overflow: 'hidden',
          background: look.custom
            ? `radial-gradient(ellipse at 50% 45%, #0a0f22 0%, ${look.background} 72%)`
            : 'radial-gradient(ellipse at 50% 40%, #131826 0%, #0b0e17 70%)',
        }}
      >
        {nodes.length === 0 && <div className="flex items-center justify-center h-full text-gray-500">Building graph…</div>}
        {nodes.length > 0 && (
          <ForceGraph3D
            ref={fgRef}
            width={size.w}
            height={size.h}
            graphData={view}
            // Opaque clear colour: a transparent canvas is re-blended with the
            // page on every frame.
            // The bloom composer lifts near-black clear colours to navy; pure black stays black.
            backgroundColor={look.custom && settings.glow ? '#000000' : 'rgba(0,0,0,0)'}
            rendererConfig={RENDERER_CONFIG}
            showNavInfo={false}
            nodeRelSize={6}
            nodeVal="val"
            nodeLabel=""
            nodeColor={nodeColor}
            nodeOpacity={0.95}
            nodeThreeObject={nodeThreeObject}
            nodeThreeObjectExtend={!look.custom}
            linkColor={linkColor}
            linkMaterial={look.custom ? linkMaterial : undefined}
            linkVisibility={linkVisible}
            // A non-zero linkWidth makes react-force-graph build a CylinderGeometry
            // *mesh* per link; at ~5k links that alone cost ~60% of the frame budget.
            // 0 renders them as THREE.Line instead. "Thick links" opts back in.
            linkWidth={settings.thickLinks ? linkWidth : 0}
            linkOpacity={0.5}
            linkDirectionalParticles={linkParticles}
            linkDirectionalParticleSpeed={0.005}
            linkDirectionalParticleColor={particleColor}
            linkDirectionalParticleWidth={2.5}
            d3AlphaDecay={0.02}
            d3VelocityDecay={0.35}
            warmupTicks={0}
            // precompute.mjs already ran a 300-tick simulation and froze x/y/z;
            // re-simulating on load only burns frames and shifts that layout.
            cooldownTicks={simTicks}
            onEngineStop={() => simTicks !== 0 && setSimTicks(0)}
            enableNodeDrag={settings.drag}
            onNodeClick={handleClick}
            onBackgroundClick={handleBackground}
            onNodeHover={handleHover}
          />
        )}
      </div>
    </div>
  );
}
