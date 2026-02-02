import { useEffect, useRef } from "react";
import "../css/UFO.css";

const paths = [
  // startX, startY, endX, endY, rotate
  { sx: -200, sy: 200, ex: 1400, ey: -300, r: -10 },
  { sx: -200, sy: 500, ex: 1400, ey: 100, r: 5 },
  { sx: -200, sy: 300, ex: 1400, ey: 600, r: 12 },
  { sx: -300, sy: 100, ex: 1500, ey: 400, r: -6 },
];

export default function UFO() {
  const ufoRef = useRef(null);

  useEffect(() => {
    const ufo = ufoRef.current;

    const animate = () => {
      const p = paths[Math.floor(Math.random() * paths.length)];
      const duration = 14000 + Math.random() * 6000;

      ufo.animate(
        [
          {
            transform: `translate(${p.sx}px, ${p.sy}px) rotate(${p.r}deg)`,
            opacity: 0,
          },
          { opacity: 1, offset: 0.1 },
          {
            transform: `translate(${p.ex}px, ${p.ey}px) rotate(${p.r * -1}deg)`,
            opacity: 0,
          },
        ],
        {
          duration,
          easing: "linear",
          fill: "forwards",
        },
      );

      setTimeout(animate, duration + 2000);
    };

    animate();
  }, []);

  return (
    <div className="ufo-layer">
      <svg
        ref={ufoRef}
        className="ufo"
        width="140"
        height="80"
        viewBox="0 0 140 80"
      >
        {/* Glow */}
        <ellipse
          cx="70"
          cy="45"
          rx="55"
          ry="16"
          fill="rgba(0,255,255,0.35)"
          filter="blur(10px)"
        />

        {/* Body */}
        <ellipse cx="70" cy="45" rx="50" ry="14" fill="#cfd8dc" />

        {/* Dome */}
        <ellipse cx="70" cy="30" rx="22" ry="14" fill="#4fc3f7" />

        {/* Lights */}
        <circle cx="45" cy="47" r="3" fill="#00e5ff" />
        <circle cx="70" cy="47" r="3" fill="#00e5ff" />
        <circle cx="95" cy="47" r="3" fill="#00e5ff" />
      </svg>
    </div>
  );
}
