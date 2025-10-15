import { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";

export default function ForeverUsSignature() {
  const [isVisible, setIsVisible] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowHeart(true), 1500);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[50vh] flex items-center justify-center px-4 relative"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-8 mb-8">
          <div
            className={`font-script text-6xl md:text-8xl transition-all duration-1500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
            style={{
              background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-initial-left"
          >
            H
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${
              showHeart
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0"
            }`}
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-primary fill-primary drop-shadow-[0_0_30px_rgba(236,181,181,0.8)]" />
              <div className="absolute inset-0 animate-pulse-glow">
                <Heart className="w-20 h-20 text-primary fill-primary blur-md" />
              </div>
            </div>
          </div>

          <div
            className={`font-script text-6xl md:text-8xl transition-all duration-1500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
            style={{
              background: "linear-gradient(135deg, #f4d4d4 0%, #ecb5b5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-initial-right"
          >
            S
          </div>
        </div>

        <p
          className={`font-display text-3xl md:text-5xl font-semibold mb-4 transition-all duration-1000 delay-1500 ${
            showHeart ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-forever-us"
        >
          Forever Us
        </p>

        <p
          className={`font-body text-xl md:text-2xl text-muted-foreground transition-all duration-1000 delay-2000 ${
            showHeart ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="text-signature-message"
        >
          Two hearts, one beautiful story
        </p>
      </div>
    </div>
  );
}
