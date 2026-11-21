const ridge = [
  [48, 168],
  [112, 178],
  [176, 146],
  [236, 158],
  [300, 112],
  [360, 86],
  [424, 128],
  [488, 116],
  [552, 148],
  [608, 140],
] as const;

const held = [
  [230, 312],
  [292, 276],
  [354, 318],
  [416, 284],
  [318, 372],
  [392, 378],
] as const;

export function OwnedField() {
  const ridgePath = ridge.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");

  return (
    <div className="relative aspect-[5/4] overflow-hidden border border-rule bg-[#0b0b0b]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,244,239,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(110% 90% at 50% 42%, #000 30%, transparent 80%)",
        }}
      />

      <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-ink/25" />
      <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-ink/25" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-ink/25" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-ink/25" />

      <p className="kicker absolute left-6 top-6 text-muted">What stays</p>
      <p className="kicker absolute bottom-6 right-6 text-muted">What travels</p>

      <svg
        viewBox="0 0 640 500"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="A ridge of readings above a body of knowledge that stays put, while the work moves out and returns."
      >
        <path
          d={ridgePath}
          fill="none"
          stroke="#f7f4ef"
          strokeOpacity="0.55"
        />
        {ridge.map(([x, y], i) => (
          <rect
            key={`${x}-${y}`}
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            fill={i === 5 ? "#f0c068" : "#f7f4ef"}
            opacity={i === 5 ? 1 : 0.7}
          />
        ))}

        <rect
          x="176"
          y="236"
          width="288"
          height="196"
          fill="none"
          stroke="#f7f4ef"
          strokeOpacity="0.28"
          strokeDasharray="3 5"
        />

        <g fill="none" stroke="#f7f4ef" strokeOpacity="0.4">
          <path d="M 230 312 L 292 276 L 354 318 L 416 284" />
          <path d="M 292 276 L 318 372 L 392 378 L 416 284" />
          <path d="M 354 318 L 392 378" />
        </g>
        {held.map(([x, y], i) => (
          <rect
            key={`${x}-${y}`}
            x={x - 4}
            y={y - 4}
            width="8"
            height="8"
            fill={i === 2 ? "#f0c068" : "#f7f4ef"}
            opacity={i === 2 ? 1 : 0.8}
          />
        ))}

        <g fill="none" stroke="#f7f4ef" strokeOpacity="0.45">
          <path d="M 464 300 C 560 260, 590 360, 464 400" />
          <path d="M 176 292 C 78 250, 52 370, 176 408" />
        </g>

        <g className="motion-reduce:hidden" fill="#f0c068">
          <circle r="2.4">
            <animateMotion
              dur="9s"
              repeatCount="indefinite"
              path="M 464 300 C 560 260, 590 360, 464 400"
            />
          </circle>
          <circle r="2.2" fill="#f7f4ef">
            <animateMotion
              dur="11s"
              begin="-4s"
              repeatCount="indefinite"
              path="M 176 292 C 78 250, 52 370, 176 408"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
