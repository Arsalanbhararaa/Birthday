import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
}

interface FloatingHeartsProps {
  count?: number;
}

export default function FloatingHearts({ count = 20 }: FloatingHeartsProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 16 + Math.random() * 24,
        drift: (Math.random() - 0.5) * 100,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20"
          style={{
            left: `${particle.x}%`,
            bottom: "-10%",
            animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <Heart
            className="text-primary fill-primary"
            style={{
              width: particle.size,
              height: particle.size,
              filter: "blur(1px)",
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-110vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
