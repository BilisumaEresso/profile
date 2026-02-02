import { useNavigate } from "react-router-dom";
import "../css/TechStackSection.css";
import { useMemo, useState, useEffect } from "react";

const TechStackSection = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbits = [
    {
      id: "frontend",
      className: "orbit-1",
      planets: [
        {
          name: "React",
          color: "#61DAFB",
          desc: "UI library for building interfaces",
          pos: 1,
          icon: "react",
          viewBox: "0 0 24 24",
        },
        {
          name: "htmx",
          color: "#EC6220",
          desc: "HTML-driven interactivity",
          pos: 2,
          icon: "htmx",
          viewBox: "0 0 24 24",
        },
        {
          name: "CSS",
          color: "#264DE4",
          desc: "Styling and layout engine",
          pos: 3,
          icon: "css",
          viewBox: "0 0 24 24",
        },
        {
          name: "Tailwind",
          color: "#38BDF8",
          desc: "Utility-first CSS framework",
          pos: 4,
          icon: "tailwindcss",
          viewBox: "0 0 24 24",
        },
      ],
    },
    {
      id: "backend",
      className: "orbit-2",
      planets: [
        {
          name: "Node.js",
          color: "#3C873A",
          desc: "Server-side JavaScript runtime",
          pos: 0.5,
          icon: "nodedotjs",
          viewBox: "0 0 24 24",
        },
        {
          name: "Express",
          color: "#000000",
          desc: "Minimal backend framework",
          pos: 1.5,
          icon: "express",
          viewBox: "0 0 24 24",
        },
        {
          name: ".NET",
          color: "#512BD4",
          desc: "Enterprise backend framework",
          pos: 2.5,
          icon: "dotnet",
          viewBox: "0 0 24 24",
        },
        {
          name: "PostgreSQL",
          color: "#336791",
          desc: "Relational database system",
          pos: 3.5,
          icon: "postgresql",
          viewBox: "0 0 24 24",
        },
      ],
    },
    {
      id: "tools",
      className: "orbit-3",
      planets: [
        {
          name: "Git",
          color: "#F05032",
          desc: "Version control system",
          pos: 0.75,
          icon: "git",
          viewBox: "0 0 24 24",
        },
        {
          name: "MongoDB",
          color: "#47A248",
          desc: "NoSQL document database",
          pos: 1.75,
          icon: "mongodb",
          viewBox: "0 0 24 24",
        },
        {
          name: "C++",
          color: "#00599C",
          desc: "High-performance language",
          pos: 2.75,
          icon: "cplusplus",
          viewBox: "0 0 24 24",
        },
        {
          name: "JavaScript",
          color: "#F7DF1E",
          desc: "Core language of the web",
          pos: 3.75,
          icon: "javascript",
          viewBox: "0 0 24 24",
        },
      ],
    },
    {
      id: "extra",
      className: "orbit-4",
      planets: [
        {
          name: "VS Code",
          color: "white",
          desc: "My Favorite Code IDE",
          pos: 1.25,
          icon: "vs",
          viewBox: "0 0 24 24",
        },
        {
          name: "GitHub",
          color: "white",
          desc: "Global Code Sharing Platform",
          pos: 2.25,
          icon: "github",
          viewBox: "0 0 24 24",
        },
        {
          name: "C#",
          color: "#9B4993",
          desc: "High-performance WinForm language",
          pos: 3.25,
          icon: "csharp",
          viewBox: "0 0 32 32",
        },
        {
          name: "Java",
          color: "white",
          desc: "High Performance OOP language",
          pos: 4.25,
          icon: "java",
          viewBox: "0 0 32 32",
        },
      ],
    },
  ];

  // Get planet position based on angle with responsive radius
  const getPlanetPosition = (orbitIndex, position) => {
    let radius;

    if (windowWidth <= 479) {
      // Small mobile
      radius = [60, 95, 130, 165];
    } else if (windowWidth <= 767) {
      // Mobile
      radius = [75, 120, 165, 210];
    } else if (windowWidth <= 1024) {
      // Tablet
      radius = [95, 155, 220, 285];
    } else {
      // Desktop
      radius = [110, 180, 260, 340];
    }

    const angle = position * 90 * (Math.PI / 180);
    const x = Math.cos(angle) * radius[orbitIndex];
    const y = Math.sin(angle) * radius[orbitIndex];

    return { x, y };
  };

  // Check if icon needs white fill (for dark logos)
  const needsWhiteFill = (iconName) => {
    const darkIcons = ["github", "express", "visual-studio", "java", "csharp"];
    return !darkIcons.includes(iconName);
  };

  const shootingStars = useMemo(() => {
    let count;
    let size;

    if (windowWidth <= 479) {
      count = 2;
      size = "120px";
    } else if (windowWidth <= 767) {
      count = 2;
      size = "150px";
    } else {
      count = 3;
      size = "200px";
    }

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: (i * 8) % 20,
      left: -100 + ((i * 10) % 50),
      delay: i * 20 + ((i * 5) % 15),
      duration:
        windowWidth <= 767 ? 3 + ((i * 0.8) % 1.5) : 3 + ((i * 0.8) % 2),
      opacity: 0.7 + ((i * 0.1) % 0.3),
      size: size,
    }));
  }, [windowWidth]);

  return (
    <section className="tech-section">
      <h2>Tech Solar System</h2>
      <p>How my skills orbit around problem solving</p>

      <div className="solar-system-container">
        {shootingStars.map((shootingStar) => (
          <div
            key={shootingStar.id}
            className="shooting-star"
            style={{
              top: `${shootingStar.top}%`,
              left: `${shootingStar.left}%`,
              animationDelay: `${shootingStar.delay}s`,
              animationDuration: `${shootingStar.duration}s`,
              opacity: shootingStar.opacity,
              width: shootingStar.size,
            }}
          />
        ))}

        {/* ☀️ Sun */}
        <button
          className="sun"
          aria-label="About me"
          onClick={() => navigate("/about")}
        >
          <span className="sun-glow" />
          <span className="sun-core" />
        </button>

        {/* 🪐 Orbits - Orbit labels removed */}
        {orbits.map((orbit, orbitIndex) => (
          <div key={orbit.id} className={`orbit ${orbit.className}`}>
            {/* Orbit label removed from here */}
            <div className="orbit-path" />

            {orbit.planets.map((planet, planetIndex) => {
              const position = getPlanetPosition(orbitIndex, planet.pos - 1);

              return (
                <div
                  key={planetIndex}
                  className={`planet-container pos-${planet.pos}`}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                >
                  <div
                    className="planet"
                    style={{
                      backgroundColor: planet.color,
                      boxShadow: `
                        0 0 20px ${planet.color}80,
                        0 0 40px ${planet.color}40,
                        0 0 60px ${planet.color}20
                      `,
                    }}
                  >
                    <svg
                      className={`planet-icon ${needsWhiteFill(planet.icon) ? "white-fill" : ""}`}
                      viewBox={planet.viewBox}
                      style={{
                        width: planet.viewBox === "0 0 32 32" ? "70%" : "60%",
                        height: planet.viewBox === "0 0 32 32" ? "70%" : "60%",
                        fill: needsWhiteFill(planet.icon)
                          ? "white"
                          : "currentColor",
                      }}
                    >
                      <use href={`/icons/sprite2.svg#${planet.icon}`} />
                    </svg>
                    <div
                      className="planet-ring"
                      style={{ borderColor: planet.color }}
                    />
                  </div>
                  <div className="planet-tooltip">
                    <div className="tooltip-header">
                      <span
                        className="tooltip-icon"
                        style={{ backgroundColor: planet.color }}
                      >
                        <svg
                          className={`tooltip-svg ${needsWhiteFill(planet.icon) ? "white-fill" : ""}`}
                          viewBox={planet.viewBox}
                          style={{
                            width:
                              planet.viewBox === "0 0 32 32" ? "18px" : "14px",
                            height:
                              planet.viewBox === "0 0 32 32" ? "18px" : "14px",
                            fill: needsWhiteFill(planet.icon)
                              ? "white"
                              : "currentColor",
                          }}
                        >
                          <use href={`/icons/sprite2.svg#${planet.icon}`} />
                        </svg>
                      </span>
                      <h4>{planet.name}</h4>
                    </div>
                    <p>{planet.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <div className="comet" />
        <div className="asteroid-field" />
      </div>
    </section>
  );
};

export default TechStackSection;
