'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type FunFactGlobeProps = {
  className?: string;
};

const ACCENT: [number, number, number] = [0.996, 0.498, 0.176]; // #FE7F2D

/** Capitals / main city pins — [lat, lng] */
const PLACES_BEEN_MARKERS = [
  { location: [35.1856, 33.3823] as [number, number], size: 0.03, id: 'cyprus' },
  { location: [37.9838, 23.7275] as [number, number], size: 0.03, id: 'greece' },
  { location: [39.9334, 32.8597] as [number, number], size: 0.03, id: 'turkey' },
  { location: [41.7151, 44.8271] as [number, number], size: 0.03, id: 'georgia' },
  { location: [28.6139, 77.209] as [number, number], size: 0.03, id: 'india' },
  { location: [52.3676, 4.9041] as [number, number], size: 0.03, id: 'netherlands' },
  { location: [50.8503, 4.3517] as [number, number], size: 0.03, id: 'belgium' },
  { location: [52.52, 13.405] as [number, number], size: 0.03, id: 'germany' },
  { location: [41.9028, 12.4964] as [number, number], size: 0.03, id: 'italy' },
  { location: [40.4168, -3.7038] as [number, number], size: 0.03, id: 'spain' },
  { location: [35.8989, 14.5146] as [number, number], size: 0.03, id: 'malta' },
] as const;

export const FUN_FACT_GLOBE_PLACE_COUNT = PLACES_BEEN_MARKERS.length;

const THEME_CONFIG = {
  dark: {
    dark: 1 as const,
    diffuse: 0,
    mapBrightness: 12,
    baseColor: [0.25, 0.25, 0.25] as [number, number, number],
    glowColor: [0.06, 0.06, 0.06] as [number, number, number],
    markerColor: ACCENT,
    opacity: 0.85,
  },
  light: {
    dark: 0 as const,
    diffuse: 0,
    mapBrightness: 12,
    baseColor: [1, 1, 1] as [number, number, number],
    glowColor: [1, 1, 1] as [number, number, number],
    markerColor: ACCENT,
    opacity: 1,
  },
} as const;

export default function FunFactGlobe({ className }: FunFactGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    let raf = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    const cfg = THEME_CONFIG[theme];

    const tick = () => {
      if (!globe) return;
      phiRef.current += 0.005;
      globe.update({ phi: phiRef.current });
      raf = requestAnimationFrame(tick);
    };

    const mountGlobe = () => {
      cancelAnimationFrame(raf);
      globe?.destroy();
      globe = null;

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = parent.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: w * dpr,
        height: h * dpr,
        phi: phiRef.current,
        theta: 0.2,
        dark: cfg.dark,
        diffuse: cfg.diffuse,
        mapSamples: 16000,
        mapBrightness: cfg.mapBrightness,
        baseColor: cfg.baseColor,
        markerColor: cfg.markerColor,
        glowColor: cfg.glowColor,
        markers: [...PLACES_BEEN_MARKERS],
        opacity: cfg.opacity,
        context: { alpha: true, premultipliedAlpha: false },
      });

      raf = requestAnimationFrame(tick);
    };

    mountGlobe();

    const ro = new ResizeObserver(mountGlobe);
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(raf);
      globe?.destroy();
      ro.disconnect();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}
