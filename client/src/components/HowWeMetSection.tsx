import { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";

export default function HowWeMetSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [pathsDrawn, setPathsDrawn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setPathsDrawn(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d1219]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl w-full">
        <h2
          className={`font-display text-5xl md:text-7xl font-semibold text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-how-we-met-title"
        >
          How We Met
        </h2>

        <div className="relative flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-96"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 200 Q 250 50, 450 200"
              stroke="url(#gradient1)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset={pathsDrawn ? "0" : "1000"}
              className="transition-all duration-2000 ease-out"
              style={{ transitionDuration: "2s" }}
            />
            <path
              d="M 950 200 Q 750 350, 550 200"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset={pathsDrawn ? "0" : "1000"}
              className="transition-all duration-2000 ease-out"
              style={{ transitionDuration: "2s" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ecb5b5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ecb5b5" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f4d4d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f4d4d4" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative flex items-center justify-between w-full px-8 md:px-16 z-10">
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(236,181,181,0.4)] rotate-[-3deg] bg-card">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"
                  alt="Her portrait"
                  className="w-full h-full object-cover"
                  data-testid="img-her-portrait"
                />
              </div>
              <p className="font-script text-2xl text-primary" data-testid="text-her-label">Her</p>
            </div>

            <div
              className={`transition-all duration-1000 delay-1000 ${
                pathsDrawn ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <Heart className="w-16 h-16 text-primary fill-primary animate-heart-beat drop-shadow-[0_0_20px_rgba(236,181,181,0.6)]" />
            </div>

            <div
              className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/50 shadow-[0_0_30px_rgba(244,212,212,0.4)] rotate-[3deg] bg-card">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="His portrait"
                  className="w-full h-full object-cover"
                  data-testid="img-his-portrait"
                />
              </div>
              <p className="font-script text-2xl text-accent" data-testid="text-his-label">Him</p>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 max-w-3xl mx-auto transition-all duration-1000 delay-1500 ${
            pathsDrawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xl md:text-2xl text-center text-foreground/90 leading-relaxed" data-testid="text-how-we-met-story">
            It was a beautiful day when our paths first crossed. From that magical moment,
            everything changed. Two souls found each other in this vast universe, and from
            that day forward, we've been writing the most beautiful story together.
          </p>
        </div>
      </div>
    </div>
  );
}
