import React, { useEffect, useRef, useState } from 'react';
import { LOOKS, LOOK_IDS } from './looks';

const DURATION_S = 20;

export function LookSwitcher({ look, setLook, onTour, touring, timelapseOn, onTimelapse }) {
  const canTimelapse = LOOKS[look].custom;
  return (
    <div className="flex flex-wrap items-center gap-1.5 pointer-events-auto">
      <div className="flex rounded-full border border-white/10 bg-black/55 backdrop-blur-md p-0.5 shadow-xl">
        {LOOK_IDS.map((id) => (
          <button
            key={id}
            title={LOOKS[id].hint}
            onClick={() => setLook(id)}
            className={`whitespace-nowrap px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] tracking-[0.12em] uppercase transition-colors ${
              look === id ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
            }`}
          >{LOOKS[id].label}</button>
        ))}
      </div>
      <button
        onClick={onTour}
        className={`whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-[0.12em] uppercase border backdrop-blur-md shadow-xl transition-colors ${
          touring ? 'bg-white text-black border-white' : 'bg-black/55 text-gray-200 border-white/10 hover:text-white'
        }`}
      >{touring ? '■ Stop' : '✦ Tour'}</button>
      <button
        onClick={onTimelapse}
        disabled={!canTimelapse}
        title={canTimelapse ? 'Watch the sky light up in the order the repos were created' : 'Switch to Deep Sky or Holo for the time-lapse'}
        className={`whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-[0.12em] uppercase border backdrop-blur-md shadow-xl transition-colors disabled:opacity-40 ${
          timelapseOn ? 'bg-white text-black border-white' : 'bg-black/55 text-gray-200 border-white/10 hover:text-white'
        }`}
      >⟳ Time-lapse</button>
    </div>
  );
}

export function TourCaption({ caption }) {
  // Keep the last caption mounted while it fades out
  const [shown, setShown] = useState(caption);
  useEffect(() => { if (caption) setShown(caption); }, [caption]);
  return (
    <div
      className="absolute inset-x-0 bottom-10 z-20 flex justify-center pointer-events-none px-4 transition-opacity duration-1000"
      style={{ opacity: caption ? 1 : 0 }}
    >
      {shown && (
        <div className="text-center max-w-xl">
          <div className="text-[15px] md:text-lg font-light text-white/90 tracking-wide" style={{ textShadow: '0 0 18px rgba(0,0,0,0.9)' }}>{shown.title}</div>
          {shown.sub && <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">{shown.sub}</div>}
        </div>
      )}
    </div>
  );
}

/**
 * Time-lapse bar. `value` is 0..1 along the creation timeline; the parent
 * passes it to the star layer. `maxAgeDays` labels the date.
 */
export function TimelapseBar({ value, setValue, maxAgeDays, onClose }) {
  const [playing, setPlaying] = useState(true);
  const raf = useRef(0);
  const valRef = useRef(value);
  valRef.current = value;

  useEffect(() => {
    if (!playing) return undefined;
    let last = performance.now();
    let v = valRef.current >= 1 ? 0 : valRef.current; // replay from the start once finished
    setValue(v);
    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      v = Math.min(1, v + dt / DURATION_S);
      setValue(v);
      if (v >= 1) { setPlaying(false); return; }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, setValue]);

  const date = new Date(Date.now() - (1 - value) * maxAgeDays * 86400000);
  const label = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[min(560px,calc(100%-1.5rem))] rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-3 py-2 flex items-center gap-3 shadow-xl">
      <button onClick={() => setPlaying((p) => !p)} className="text-white text-sm w-6" aria-label={playing ? 'Pause' : 'Play'}>{playing ? '❚❚' : '▶'}</button>
      <input
        type="range" min={0} max={1} step={0.001} value={value}
        onChange={(e) => { setPlaying(false); setValue(Number(e.target.value)); }}
        className="flex-1 accent-white"
        aria-label="Timeline"
      />
      <span className="text-[11px] tabular-nums tracking-wider text-gray-200 w-20 text-right">{label}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white text-xs" aria-label="Close time-lapse">✕</button>
    </div>
  );
}
