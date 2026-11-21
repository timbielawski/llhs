"use client";

import { useRef, useState } from "react";
import { qualities } from "@/lib/content";

const sources = [128, 176, 224, 272, 320];

export function ScanSpecimen() {
  const sheet = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0.62);

  const index = Math.min(
    qualities.length - 1,
    Math.floor(ratio * qualities.length),
  );
  const finding = qualities[index];

  function setFromClientX(clientX: number) {
    const node = sheet.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setRatio(next);
  }

  return (
    <figure>
      <div
        ref={sheet}
        className="relative aspect-[1.45/1] min-h-[280px] overflow-hidden border border-rule bg-[#0b0b0b]"
        onPointerMove={(event) => setFromClientX(event.clientX)}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(247,244,239,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(120% 100% at 62% 48%, #000 28%, transparent 78%)",
          }}
        />

        <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-ink/25" />
        <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-ink/25" />
        <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-ink/25" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-ink/25" />

        <div className="absolute left-6 top-6">
          <p className="kicker text-muted">Source to decision</p>
        </div>
        <div className="absolute bottom-6 right-6 text-right">
          <p className="kicker text-muted">Field 01</p>
        </div>

        <svg
          viewBox="0 0 720 440"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Records arrive from the left, pass through a model, and split toward a decision."
        >
          <g fill="none" stroke="#f7f4ef" strokeWidth="1">
            <rect
              x="214"
              y="96"
              width="250"
              height="248"
              strokeDasharray="3 5"
              opacity="0.28"
            />

            {sources.map((y) => (
              <path
                key={y}
                d={`M 48 ${y} H 150`}
                opacity="0.45"
              />
            ))}
            <path d="M 150 128 V 320" opacity="0.45" />
            <path d="M 150 224 H 250" />
            <path d="M 430 224 H 500" />
            <path d="M 500 224 L 575 148 H 584" opacity="0.7" />
            <path d="M 500 224 L 552 316" opacity="0.7" />

            <path d="M 468 146 V 196" opacity="0.8" />
            <path d="M 468 252 V 302" opacity="0.8" />
            <path d="M 484 146 V 196" opacity="0.8" />
            <path d="M 484 252 V 302" opacity="0.8" />
          </g>

          {sources.map((y, i) => (
            <rect
              key={y}
              x={i % 2 === 0 ? 40 : 56}
              y={y - 4}
              width="8"
              height="8"
              fill={i === 2 ? "#f0c068" : "#f7f4ef"}
              opacity={i === 2 ? 1 : 0.55}
            />
          ))}

          {Array.from({ length: 16 }, (_, cell) => {
            const col = cell % 4;
            const row = Math.floor(cell / 4);
            const x = 250 + col * 42;
            const y = 128 + row * 46;
            const filled = [1, 6, 9, 14].includes(cell);
            const warm = cell === 6;
            return (
              <rect
                key={cell}
                x={x}
                y={y}
                width="28"
                height="28"
                fill={warm ? "#f0c068" : filled ? "#f7f4ef" : "none"}
                fillOpacity={warm ? 0.9 : filled ? 0.16 : 0}
                stroke="#f7f4ef"
                strokeOpacity={filled ? 0.7 : 0.22}
              />
            );
          })}

          {[0, 1, 2].map((bar) => (
            <rect
              key={bar}
              x={588 + bar * 16}
              y={168 - [34, 18, 46][bar]}
              width="8"
              height={[34, 18, 46][bar]}
              fill="#f7f4ef"
              opacity={bar === 2 ? 0.9 : 0.35}
            />
          ))}

          <g fill="#f7f4ef">
            <rect x="548" y="312" width="8" height="8" opacity="0.45" />
            <rect x="590" y="292" width="8" height="8" opacity="0.75" />
            <rect x="590" y="332" width="8" height="8" />
          </g>
          <path
            d="M 556 316 L 590 296 M 556 316 L 590 336"
            fill="none"
            stroke="#f7f4ef"
            strokeOpacity="0.4"
          />

          <g className="motion-reduce:hidden">
            <circle r="2.4" fill="#f7f4ef">
              <animateMotion
                dur="8.5s"
                repeatCount="indefinite"
                path="M 48 224 H 500 L 575 148 H 584"
              />
            </circle>
            <circle r="2.2" fill="#f0c068">
              <animateMotion
                dur="8.5s"
                begin="-3.2s"
                repeatCount="indefinite"
                path="M 48 224 H 500 L 552 316"
              />
            </circle>
            <circle r="1.8" fill="#f7f4ef" opacity="0.55">
              <animateMotion
                dur="8.5s"
                begin="-6s"
                repeatCount="indefinite"
                path="M 48 176 H 150 V 224 H 430"
              />
            </circle>
          </g>
        </svg>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-ink/80"
          style={{ left: `${ratio * 100}%` }}
        >
          <span
            className="absolute top-1/2 whitespace-nowrap bg-ink px-2 py-1 text-[9px] uppercase tracking-[0.22em] text-canvas"
            style={{
              left: ratio > 0.72 ? "auto" : "10px",
              right: ratio > 0.72 ? "10px" : "auto",
              transform: "translateY(-50%)",
            }}
          >
            {finding.title}
          </span>
        </div>

        <label className="sr-only" htmlFor="specimen-range">
          Move across the field
        </label>
        <input
          id="specimen-range"
          className="sr-only"
          type="range"
          min={0}
          max={100}
          value={Math.round(ratio * 100)}
          onChange={(event) => setRatio(Number(event.target.value) / 100)}
        />
      </div>

      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-faint pt-3">
        <p className="kicker text-muted">
          <i className="mr-3 inline-block h-[5px] w-[5px] bg-sun align-middle" />
          {finding.title}
        </p>
        <p className="min-w-0 text-sm font-light text-mist">{finding.note}</p>
      </figcaption>
    </figure>
  );
}
