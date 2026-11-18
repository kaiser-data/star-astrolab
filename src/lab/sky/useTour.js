// A slow camera tour through the largest constellations, with quiet captions.
import { useCallback, useEffect, useRef, useState } from 'react';

const FLY_MS = 3200;
const HOLD_MS = 6500;
const STOPS = 7;

const repoName = (n) => n?.full_name?.split('/')[1] ?? n?.full_name ?? 'a quiet one';

function captionFor(c, i) {
  const [t1, t2, t3] = c.topics.filter(Boolean).map((t) => t.replace(/-/g, ' '));
  const lines = [
    `Here, ${c.count} stars gather around ${c.name}.`,
    `Further out: ${c.name}. ${c.count} repos, drawn together by ${t2 ?? t1 ?? 'shared ideas'}.`,
    `A cluster of ${c.name}. Its brightest light is ${repoName(c.brightest)}.`,
    `${c.name}. ${c.count} stars, quietly orbiting ${t3 ?? t1 ?? 'one another'}.`,
  ];
  const sub = `Brightest: ${c.brightest?.full_name ?? '—'} · ★ ${(c.brightest?.stars ?? 0).toLocaleString()}`;
  return { title: lines[i % lines.length], sub };
}

const wait = (ms, token) => new Promise((res, rej) => {
  const t = setTimeout(res, ms);
  token.cancel = () => { clearTimeout(t); rej(new Error('cancelled')); };
});

export function useTour(fgRef, getCentres) {
  const [caption, setCaption] = useState(null);
  const [running, setRunning] = useState(false);
  const token = useRef(null);

  const stop = useCallback(() => {
    token.current?.cancel?.();
    token.current = null;
    setRunning(false);
    setCaption(null);
  }, []);

  const start = useCallback(async () => {
    const fg = fgRef.current;
    if (!fg) return;
    token.current?.cancel?.();
    const tk = {};
    token.current = tk;
    setRunning(true);
    const controls = fg.controls?.();
    const prevRotate = controls?.autoRotate;
    if (controls) controls.autoRotate = false;
    try {
      setCaption({ title: 'Let us drift through the sky for a while.', sub: 'Tap or drag anywhere to stop' });
      fg.zoomToFit?.(2000, 60);
      await wait(2600, tk);
      const stops = getCentres().filter((c) => c.count >= 6).slice(0, STOPS);
      for (let i = 0; i < stops.length; i++) {
        const c = stops[i];
        const dist = Math.max(220, c.spread * 3.2);
        // Approach from a slowly turning angle so each stop feels different
        const a = 0.6 + i * 0.9;
        fg.cameraPosition(
          { x: c.centre.x + Math.cos(a) * dist, y: c.centre.y + dist * 0.35, z: c.centre.z + Math.sin(a) * dist },
          c.centre, FLY_MS,
        );
        setCaption(null);
        await wait(FLY_MS * 0.7, tk);
        setCaption(captionFor(c, i));
        await wait(HOLD_MS, tk);
      }
      setCaption({ title: 'And that is the sky, for now.', sub: 'Each star is a repo worth building on' });
      fg.zoomToFit?.(2600, 60);
      await wait(4200, tk);
      setCaption(null);
      setRunning(false);
    } catch {
      /* cancelled */
    } finally {
      if (controls && prevRotate != null) controls.autoRotate = prevRotate;
      if (token.current === tk) token.current = null;
    }
  }, [fgRef, getCentres]);

  useEffect(() => () => token.current?.cancel?.(), []);

  return { start, stop, running, caption };
}
