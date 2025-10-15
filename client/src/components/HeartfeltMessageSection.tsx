import { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function HeartfeltMessageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const message = `My dearest love, from the moment you walked into my life, everything changed. You brought light into my darkest days and turned ordinary moments into extraordinary memories. Your smile is my favorite sight, your laughter is my favorite sound, and your happiness is my greatest wish. Every day with you feels like a beautiful dream I never want to wake up from. You are my best friend, my partner, my everything. Thank you for being exactly who you are, and for loving me the way you do. I promise to cherish you, support you, and love you more with each passing day. You mean the world to me, and I can't wait to create a lifetime of beautiful memories together.`;

  const words = message.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || currentWordIndex >= words.length) return;

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + (prev ? " " : "") + words[currentWordIndex]);
      setCurrentWordIndex((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(timer);
  }, [isVisible, currentWordIndex, words]);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary blur-[2px]" />
          </div>
        ))}
      </div>

      <div className="absolute top-8 right-8">
        <CountdownTimer />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className={`font-display text-5xl md:text-7xl font-semibold text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-heartfelt-title"
        >
          What You Mean to Me
        </h2>

        <div className="relative bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-2 border-primary/20 shadow-[0_0_50px_rgba(236,181,181,0.2)]">
          <div className="absolute -top-4 -left-4 w-16 h-16">
            <svg viewBox="0 0 100 100" className="text-primary/40">
              <text
                x="0"
                y="80"
                fontSize="120"
                fontFamily="Playfair Display"
                fill="currentColor"
              >
                "
              </text>
            </svg>
          </div>

          <div className="absolute -bottom-4 -right-4 w-16 h-16 rotate-180">
            <svg viewBox="0 0 100 100" className="text-primary/40">
              <text
                x="0"
                y="80"
                fontSize="120"
                fontFamily="Playfair Display"
                fill="currentColor"
              >
                "
              </text>
            </svg>
          </div>

          <p
            className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90 text-center min-h-[400px]"
            data-testid="text-heartfelt-message"
          >
            {displayedText}
            {currentWordIndex < words.length && (
              <span className="inline-block w-1 h-6 bg-primary ml-1 animate-pulse" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
