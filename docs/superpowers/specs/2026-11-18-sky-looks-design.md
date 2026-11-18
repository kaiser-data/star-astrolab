# Sky looks for the 3D map — design

Date: 2026-11-18 · Scope: `src/lab/MapView.jsx` (the "Map" tab). TopicMap is untouched.

## Goal
Make the 3D map look like a real, stylish, futuristic star sky, with several
looks the user can switch between live to compare.

## Looks (switcher pinned top-centre over the map)
- **Classic**: today's rendering, unchanged. Baseline.
- **Deep Sky**: glowing star points with a soft bloom; stellar-temperature colour by
  lifecycle and momentum; twinkle speed set by commits_90d; deep background starfield;
  faint nebula haze per constellation; constellation names in thin, spaced capitals;
  links as faint constellation lines.
- **Holo**: calm futuristic. Cyan and violet palette, additive hairline links, faint
  orbital rings plus a distant ground grid, monospace HUD labels, slow drift.

The selection persists in localStorage (wrapped in try/catch). `?look=<id>` overrides it.

## Data encoding (Deep Sky and Holo)
- Size = existing `val`.
- Colour = lifecycle_stage (Emerging/Growing → blue-white, Classic/Mature → gold,
  Declining → orange, Abandoned → dim red), brightened by momentum.
- Twinkle rate = commits_90d. Repos in the top momentum decile get a halo.

## Features available in every look
- **Tour**: flies the camera through the 6–8 largest communities (centroid from node
  positions), holding about 6 s at each, with a templated caption (name from the top
  topic, top topics, brightest repo) in a hushed tone. Any pointer input stops it.
- **Time-lapse**: a slider over repo creation date (now − age_days). Stars ignite as
  their repo is created and flare briefly. Play/pause, about 20 s end to end. Repo
  creation date is used because star dates are not in graph.json.

## Architecture
- `src/lab/sky/looks.js`: per-look config (palette, bloom, layers, label style).
- `src/lab/sky/StarLayer.js`: a single THREE.Points with a custom ShaderMaterial
  (soft disc, halo, twinkle, time-lapse reveal uniforms). One draw call.
- `src/lab/sky/Backdrop.js`: background starfield, nebula sprites, Holo rings and grid,
  constellation-label sprites.
- `src/lab/sky/useTour.js`, `src/lab/sky/useTimelapse.js`: hooks.
- `src/lab/sky/SkyControls.jsx`: look switcher, Tour button, time-lapse bar.
- MapView: in the non-Classic looks the library spheres render at opacity 0 and are
  kept only for picking. Bloom uses UnrealBloomPass from three/examples via
  `postProcessingComposer()`. Bloom is off by default under 768 px.

## Constraints
No new npm dependencies. The pixel-ratio cap stays. Hover, click, focus, the filters
and the settings panel keep working in every look.

## Verification
Build and lint pass, plus the existing tests. Screenshots of each look at 1440 px
and 390 px. Manual check of hover, click and focus. Frame rate stays acceptable with
the full corpus (minStars 0).
