import type { ReactElement } from 'react';
import type { ArtKey } from '../../core/entities';

/* ------------------------------------------------------------------ */
/* Sigils — one hand-drawn emblem per kind of motif                    */
/* ------------------------------------------------------------------ */

const sigilPaths: Record<ArtKey, ReactElement> = {
  chariot: (
    <>
      <circle cx="24" cy="42" r="9" />
      <circle cx="24" cy="42" r="2.5" />
      <path d="M24 33v18M15 42h18M17.6 35.6l12.8 12.8M30.4 35.6L17.6 48.4" strokeWidth="1.4" />
      <path d="M34 40h14l-2 8H34z" />
      <path d="M48 44l10-6M45 36V22l10 4-10 4" />
      <path d="M30 24h8" />
    </>
  ),
  bow: (
    <>
      <path d="M20 10c14 6 14 38 0 44" />
      <path d="M20 10l0 44" strokeWidth="1.1" strokeDasharray="2 3" />
      <path d="M12 32h40" />
      <path d="M44 32l-7-4M44 32l-7 4" />
      <circle cx="20" cy="32" r="2" />
    </>
  ),
  mace: (
    <>
      <path d="M32 12v10" />
      <path d="M32 22c-8 0-12 5-12 11s6 10 12 10 12-4 12-10-4-11-12-11z" />
      <path d="M32 22v21M20 33h24M23 26l18 14M41 26L23 40" strokeWidth="1.2" />
      <path d="M32 43v13" />
      <path d="M28 56h8" />
    </>
  ),
  conch: (
    <>
      <path d="M20 46c-6-10 0-24 12-26 10-2 18 6 16 16-2 8-10 12-16 12-5 0-8-3-8-7 0-5 5-8 9-7" />
      <path d="M24 50c-3 3-3 6 0 8h24c3-2 3-5 0-8" />
      <path d="M40 22l6-6M46 16l4 2" />
      <circle cx="34" cy="34" r="2" />
    </>
  ),
  serpent: (
    <>
      <path d="M16 52c0-10 10-10 16-10s14 2 14-8-8-12-14-12-10 4-10 8" />
      <path d="M44 22c0 10-10 10-16 10s-14-2-14 8" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M22 30l-3-3M22 30l3-3" />
      <circle cx="24" cy="26" r="1.4" fill="currentColor" stroke="none" />
      <path d="M44 20c3-2 6-2 8 1" />
    </>
  ),
  flame: (
    <>
      <path d="M32 8c6 10 12 14 12 24a12 12 0 01-24 0c0-7 5-9 5-15 4 3 5 6 5 9 4-4 5-8 2-18z" />
      <path d="M32 34c3 3 5 6 5 9a5 5 0 01-10 0c0-4 3-6 5-9z" strokeWidth="1.2" />
    </>
  ),
  axe: (
    <>
      <path d="M18 56L42 14" />
      <path d="M30 22c6-6 16-8 22-4 2 8-2 16-10 18-4 1-8 0-10-4l-2 4" />
      <path d="M34 18l8 12" strokeWidth="1.2" />
      <path d="M16 58l6-4" />
    </>
  ),
  scroll: (
    <>
      <path d="M14 16h32v32H14z" />
      <path d="M14 16c-4 0-6 2-6 5s2 5 6 5M46 48c4 0 6-2 6-5s-2-5-6-5" />
      <path d="M22 26h18M22 32h18M22 38h12" strokeWidth="1.2" />
    </>
  ),
  trident: (
    <>
      <path d="M32 58V20" />
      <path d="M20 20V10M32 20V6M44 20V10" />
      <path d="M20 20c0 8 5 12 12 12s12-4 12-12" />
      <path d="M26 48h12" strokeWidth="1.2" />
    </>
  ),
  lotus: (
    <>
      <path d="M32 16c6 6 8 12 8 16a8 8 0 01-16 0c0-4 2-10 8-16z" />
      <path d="M32 32c-3-8-10-12-16-10 0 8 6 16 16 18M32 32c3-8 10-12 16-10 0 8-6 16-16 18" />
      <path d="M12 44c6 8 14 12 20 12s14-4 20-12" />
    </>
  ),
  peacock: (
    <>
      <path d="M32 46c-8-6-10-18-2-24s18 0 16 10-10 14-18 10" />
      <circle cx="34" cy="28" r="6" />
      <circle cx="34" cy="28" r="2.4" />
      <path d="M32 46v8M28 54h8" strokeWidth="1.4" />
      <path d="M46 20l6-6M20 22l-6-6" strokeWidth="1.2" />
    </>
  ),
  flag: (
    <>
      <path d="M18 58V8" />
      <path d="M18 10l26 6-26 8z" />
      <path d="M12 58h12" />
      <path d="M18 32l18 4-18 6z" opacity="0.55" />
    </>
  ),
  pot: (
    <>
      <path d="M16 28h32c0 14-7 22-16 22s-16-8-16-22z" />
      <path d="M12 26h40M32 22v-6" />
      <path d="M32 12c-4-4-10-4-10 2 6 2 10 0 10-2zM32 12c4-4 10-4 10 2-6 2-10 0-10-2z" />
      <path d="M26 34c2 6 3 9 6 12" strokeWidth="1.2" />
    </>
  ),
  gem: (
    <>
      <path d="M18 24h28l6 10-20 22L12 34z" />
      <path d="M12 34h40M18 24l6 10 8 22 8-22 6-10" strokeWidth="1.2" />
    </>
  ),
  crown: (
    <>
      <path d="M12 42l2-20 8 8 10-14 10 14 8-8 2 20z" />
      <path d="M14 48h36" />
      <circle cx="32" cy="36" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  mountain: (
    <>
      <path d="M8 50l14-26 8 12 6-8 14 22z" />
      <path d="M26 30l4-6 4 6" strokeWidth="1.2" />
      <path d="M8 50h48" />
      <circle cx="46" cy="16" r="5" />
    </>
  ),
  sword: (
    <>
      <path d="M32 8l6 8v22l-6 6-6-6V16z" />
      <path d="M20 44h24" />
      <path d="M32 44v12M28 58h8" />
      <path d="M32 18v22" strokeWidth="1.2" />
    </>
  ),
};

export function Sigil({ art, className = '' }: { art: ArtKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`sigil ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {sigilPaths[art]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kurukshetra panorama                                                */
/* ------------------------------------------------------------------ */

function Chariot({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) {
  const transform = `translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`;
  return (
    <g transform={transform}>
      {/* horses */}
      <path d="M8 0c6-2 10-8 18-8 4 0 6 2 6 6l3 4-2 2h-7l-3-3-6 3-2 10h-4l1-10-4 4z" opacity="0.95" />
      <path d="M-6 6c5-3 9-9 17-9 4 0 6 2 6 6l3 4-2 2H11L8 6 2 9 0 19h-4l1-10-3 4z" opacity="0.8" />
      {/* pole and flag */}
      <path d="M2 -38v54" strokeWidth="1.6" />
      <path d="M2 -38l26 5-26 8z" className="scene-flag" fill="#c1392b" stroke="none" />
      {/* chariot body */}
      <path d="M-14 -6h26l-4 16h-20z" />
      <path d="M-16 -8h30" strokeWidth="2" />
      {/* wheel */}
      <circle cx="-6" cy="18" r="9" strokeWidth="2" fill="none" />
      <path d="M-6 9v18M-15 18h18M-12.4 11.6l12.8 12.8M-12.4 24.4l12.8-12.8" strokeWidth="1" />
    </g>
  );
}

function Archer({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-34" r="7" />
      <path d="M0 -27c-6 6-8 14-6 22l-6 16M0 -27c7 5 9 13 7 21l6 17M-4 -14h10M-6 11h14" strokeWidth="3.4" fill="none" />
      <path d="M16 -44c10 12 10 32 0 44" fill="none" strokeWidth="2.6" />
      <path d="M16 -44v44" strokeWidth="1" />
      <path d="M16 -22h26" strokeWidth="1.6" />
    </g>
  );
}

function MaceBearer({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-40" r="8" />
      <path d="M0 -32c-9 8-11 20-8 30l-8 22M0 -32c9 8 11 20 8 30l9 22M-14 -14h26" strokeWidth="4" fill="none" />
      <path d="M18 -60v34" strokeWidth="3" />
      <circle cx="18" cy="-66" r="7" />
      <path d="M18 -73v-4M18 -59v-4M7 -66h-4M29 -66h4" strokeWidth="2" />
    </g>
  );
}

/** Full-bleed Kurukshetra-at-sunset hero illustration. */
export function HeroScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 760"
      className={`hero-scene ${className}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#20070a" />
          <stop offset="38%" stopColor="#5a1710" />
          <stop offset="66%" stopColor="#a8421c" />
          <stop offset="86%" stopColor="#dd8a35" />
          <stop offset="100%" stopColor="#f3c06a" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd98a" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f7a83e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f7a83e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dune" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a120c" />
          <stop offset="100%" stopColor="#1c0607" />
        </linearGradient>
        <linearGradient id="dust" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3c06a" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#f3c06a" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      <rect width="1440" height="760" fill="url(#sky)" />

      {/* sun and halo */}
      <circle cx="1030" cy="300" r="230" fill="url(#sunGlow)" />
      <circle cx="1030" cy="300" r="86" fill="#ffdca0" opacity="0.92" />
      <circle cx="1030" cy="300" r="110" fill="none" stroke="#ffdca0" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="1030" cy="300" r="140" fill="none" stroke="#ffdca0" strokeOpacity="0.18" strokeWidth="1" />

      {/* clouds */}
      <g fill="#2a0b08" opacity="0.5">
        <ellipse cx="280" cy="168" rx="150" ry="13" />
        <ellipse cx="420" cy="196" rx="110" ry="9" />
        <ellipse cx="1180" cy="150" rx="180" ry="11" />
        <ellipse cx="880" cy="120" rx="90" ry="7" />
      </g>

      {/* birds */}
      <g stroke="#2a0b08" strokeWidth="2.4" fill="none" opacity="0.8" strokeLinecap="round">
        <path d="M700 200c6-6 12-6 18 0 6-6 12-6 18 0" />
        <path d="M772 178c5-5 10-5 15 0 5-5 10-5 15 0" />
        <path d="M640 232c4-4 8-4 12 0 4-4 8-4 12 0" />
        <path d="M1196 216c5-5 9-5 14 0 5-5 9-5 14 0" />
      </g>

      {/* distant temple skyline */}
      <g fill="#2a0a09" opacity="0.85">
        <path d="M120 470h300l-18-12H138z" />
        <path d="M214 458V330l52-70 52 70v128z" />
        <path d="M266 260c10-22 26-30 26-52 0-14-8-20-8-34l8 6-6-16 10 10 4-18 4 18 10-10-6 16 8-6c0 14-8 20-8 34 0 22 16 30 26 52z" />
        <rect x="292" y="330" width="14" height="128" opacity="0.55" />
        <path d="M330 458V378l34-44 34 44v80z" opacity="0.9" />
        <path d="M118 470V400l26-30 26 30v70z" opacity="0.8" />
        <path d="M340 250v-58" stroke="#2a0a09" strokeWidth="3" />
        <path d="M340 196l34 7-34 11z" fill="#c1392b" opacity="0.75" />
      </g>

      {/* hills */}
      <path d="M0 520c160-64 300-52 420 8 130 66 250 30 420-24 150-48 300-30 600 44v212H0z" fill="url(#dune)" opacity="0.95" />
      <path d="M0 560c180-40 320-16 440 32 120 48 260 20 420-16 170-38 380-6 580 52v132H0z" fill="#1a0606" />

      {/* army silhouettes: spears and flags */}
      <g stroke="#210807" strokeWidth="3" opacity="0.85">
        {Array.from({ length: 26 }).map((_, i) => (
          <path key={`spear-${i}`} d={`M${60 + i * 54} 596 l${i % 3 === 0 ? 10 : -6} -66`} />
        ))}
      </g>
      <g fill="#210807" opacity="0.9">
        {Array.from({ length: 26 }).map((_, i) => (
          <circle key={`soldier-${i}`} cx={60 + i * 54} cy={606 + (i % 4) * 4} r="9" />
        ))}
      </g>

      {/* red flags on poles */}
      <g>
        {[190, 470, 760, 1150, 1310].map((x, i) => (
          <g key={`flag-${x}`} transform={`translate(${x} ${470 + (i % 2) * 24})`}>
            <path d="M0 0v-168" stroke="#160504" strokeWidth="3" />
            <path d="M0 -166c30-16 54 10 84-6l-6 26c-26 14-52-8-78 6z" fill="#b3271c" stroke="#7c140e" strokeWidth="1.5" />
            <path d="M0 -140c24-10 44 8 68-2" stroke="#f0b352" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
          </g>
        ))}
      </g>

      {/* foreground warriors and chariots */}
      <Chariot x={330} y={620} scale={1.5} />
      <Chariot x={980} y={628} scale={1.35} flip />
      <Archer x={700} y={664} scale={1.25} />
      <MaceBearer x={1180} y={676} scale={1.15} />
      <Chariot x={560} y={700} scale={1.9} flip />

      {/* foreground rocks */}
      <g fill="#120404">
        <path d="M0 760V700c40-18 70-8 96 6 24 12 60 10 86-4 24-12 50-10 70 6v52z" />
        <path d="M1440 760v-48c-50-22-90-10-120 8-26 16-64 14-90-2v42z" />
      </g>

      {/* dust haze */}
      <rect y="560" width="1440" height="200" fill="url(#dust)" />
    </svg>
  );
}

/** Slim decorative banner reused on detail pages. */
export function SceneBanner({ variant = 'flag' }: { variant?: ArtKey }) {
  return (
    <div className="scene-banner" aria-hidden="true">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMid slice" className="scene-banner-svg">
        <defs>
          <linearGradient id={`banner-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b0a0a" />
            <stop offset="55%" stopColor="#66190f" />
            <stop offset="100%" stopColor="#c06a22" />
          </linearGradient>
        </defs>
        <rect width="1440" height="320" fill={`url(#banner-${variant})`} />
        <g opacity="0.2" stroke="#ffe4b0" fill="none">
          <circle cx="1180" cy="160" r="150" />
          <circle cx="1180" cy="160" r="110" />
          <circle cx="1180" cy="160" r="70" />
          {Array.from({ length: 24 }).map((_, i) => (
            <path key={i} d={`M1180 160 L${1180 + 150 * Math.cos((i * Math.PI) / 12)} ${160 + 150 * Math.sin((i * Math.PI) / 12)}`} />
          ))}
        </g>
        <g fill="#1c0606" opacity="0.75">
          <path d="M0 320V250c90-40 170-30 240 0 80 34 160 16 240-10 110-36 240-20 380 30 120 42 300 34 580-10v60z" />
        </g>
        <g>
          {[120, 360, 660, 980, 1280].map((x, i) => (
            <g key={x} transform={`translate(${x} ${250 - (i % 3) * 20})`}>
              <path d="M0 0v-120" stroke="#140404" strokeWidth="2.5" />
              <path d="M0 -118c24-12 42 8 66-4l-4 22c-20 10-40-6-62 4z" fill="#a8231a" />
            </g>
          ))}
        </g>
        <g transform="translate(720 250)" opacity="0.85">
          <Sigil art={variant} className="scene-banner-sigil" />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ornaments                                                           */
/* ------------------------------------------------------------------ */

export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament-line" />
      <svg viewBox="0 0 40 24" className="ornament-mark">
        <path d="M20 3c4 5 9 6 14 4-4 6-9 8-14 8s-10-2-14-8c5 2 10 1 14-4z" fill="currentColor" opacity="0.9" />
        <circle cx="20" cy="17" r="2.4" fill="currentColor" />
      </svg>
      <span className="ornament-line" />
    </div>
  );
}

export function Mandala({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 200 200" className={`mandala ${className}`} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="100" cy="100" r="94" opacity="0.5" />
        <circle cx="100" cy="100" r="66" opacity="0.6" />
        <circle cx="100" cy="100" r="40" opacity="0.7" />
        <circle cx="100" cy="100" r="12" opacity="0.8" />
        {petals.map((_, i) => {
          const angle = (i * 360) / petals.length;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 40c10 14 10 28 0 42-10-14-10-28 0-42z" opacity="0.55" />
              <path d="M100 12c4 8 4 16 0 24-4-8-4-16 0-24z" opacity="0.4" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
