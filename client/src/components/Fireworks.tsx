import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

export default function Fireworks() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const colors = [
    "#ecb5b5",
    "#f4d4d4",
    "#e8a9a9",
    "#f0c0c0",
    "#ffd4d4",
  ];

  useEffect(() => {
    const createBurst = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.6);
      const particleCount = 30 + Math.random() * 20;
      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 2 + Math.random() * 3;
        particles.push({
          id: i,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
        });
      }

      const burstId = Date.now() + Math.random();
      setBursts((prev) => [...prev, { id: burstId, x, y, particles }]);

      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== burstId));
      }, 2000);
    };

    const interval = setInterval(createBurst, 1500);
    createBurst();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bursts.map((burst) =>
        burst.particles.map((particle) => (
          <div
            key={`${burst.id}-${particle.id}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
              animation: `firework 1.5s ease-out forwards`,
              animationDelay: "0s",
              "--x": `${particle.vx * 100}px`,
              "--y": `${particle.vy * 100}px`,
            } as any}
          />
        ))
      )}
    </div>
  );
}
