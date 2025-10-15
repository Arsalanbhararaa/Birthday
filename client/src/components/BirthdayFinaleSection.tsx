import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import Fireworks from "./Fireworks";
import { useAudio } from "@/hooks/useAudio";

export default function BirthdayFinaleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const ourSong = useAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowFireworks(true), 1000);
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
      className="w-full h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {showFireworks && <Fireworks />}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2
          className={`font-script text-7xl md:text-9xl font-bold mb-8 transition-all duration-1500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 50%, #e8a9a9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(236, 181, 181, 0.6))",
          }}
          data-testid="text-birthday-title"
        >
          Happy Birthday
        </h2>

        <p
          className={`font-display text-4xl md:text-6xl font-semibold mb-6 text-primary transition-all duration-1500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            filter: "drop-shadow(0 0 20px rgba(236, 181, 181, 0.5))",
          }}
          data-testid="text-birthday-name"
        >
          My Love
        </p>

        <p
          className={`font-body text-2xl md:text-3xl text-foreground/90 mb-12 transition-all duration-1500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="text-birthday-message"
        >
          Today we celebrate you, the most amazing person in my life.
          <br />
          Here's to many more beautiful years together! 
        </p>

        <div
          className={`transition-all duration-1500 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Button
            size="lg"
            onClick={ourSong.togglePlay}
            className="font-body text-xl px-10 py-7 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-2 border-primary-border shadow-[0_0_40px_rgba(236,181,181,0.5)] hover:shadow-[0_0_60px_rgba(236,181,181,0.8)] transition-all duration-300 hover:scale-110 animate-pulse-glow"
            data-testid="button-play-our-song"
          >
            {ourSong.isPlaying ? (
              <>
                <Pause className="w-6 h-6 mr-3" />
                Pause Our Song
              </>
            ) : (
              <>
                <Play className="w-6 h-6 mr-3" />
                Play Our Song
              </>
            )}
          </Button>
          
          <p className="font-script text-xl text-muted-foreground mt-4" data-testid="text-song-name">
            "Just the Way You Are" - Bruno Mars
          </p>
        </div>

        {ourSong.isPlaying && (
          <div className="mt-8 text-sm text-muted-foreground italic animate-fade-in" data-testid="text-song-playing">
            ♪ Now playing our song... ♪
          </div>
        )}
      </div>
    </div>
  );
}
