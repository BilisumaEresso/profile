import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  const initializeParticles = (width, height) => {
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6, // -0.3 to 0.3
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1 + 1, // 1 to 2
      });
    }
    return particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Initialize particles
    particlesRef.current = initializeParticles(width, height);

    // Mouse move listener
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Resize listener
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = initializeParticles(width, height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const repulsionDistance = 120;
      const connectionDistance = 130;

      // Update particles
      particles.forEach((particle) => {
        // Mouse repulsion
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repulsionDistance) {
          const angle = Math.atan2(dy, dx);
          const repulsionForce = 0.015;
          particle.vx += Math.cos(angle) * repulsionForce;
          particle.vy += Math.sin(angle) * repulsionForce;

          // Cap max speed
          const speed = Math.sqrt(
            particle.vx * particle.vx + particle.vy * particle.vy,
          );
          if (speed > 1.5) {
            particle.vx = (particle.vx / speed) * 1.5;
            particle.vy = (particle.vy / speed) * 1.5;
          }
        }

        // Friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (
          particle.x - particle.radius < 0 ||
          particle.x + particle.radius > width
        ) {
          particle.vx *= -1;
          particle.x = Math.max(
            particle.radius,
            Math.min(width - particle.radius, particle.x),
          );
        }
        if (
          particle.y - particle.radius < 0 ||
          particle.y + particle.radius > height
        ) {
          particle.vy *= -1;
          particle.y = Math.max(
            particle.radius,
            Math.min(height - particle.radius, particle.y),
          );
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 211, 153, 0.5)";
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(52, 211, 153, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ParticleBackground;
