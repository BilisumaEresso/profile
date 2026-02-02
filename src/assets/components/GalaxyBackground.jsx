import "../css/GalaxyBackground.css";

const GalaxyBackground = () => {
  return (
    <div className="galaxy-bg">
      {/* ⭐ STARS */}
      <div className="stars">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 🌠 SHOOTING STARS */}
      <span className="shooting-star star-1" />
      <span className="shooting-star star-2" />
      <span className="shooting-star star-3" />
    </div>
  );
};

export default GalaxyBackground;
