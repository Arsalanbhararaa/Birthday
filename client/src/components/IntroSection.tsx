import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import { useAudio } from "@/hooks/useAudio";

interface IntroSectionProps {
  onBegin: () => void;
}

export default function IntroSection({ onBegin }: IntroSectionProps) {
  const backgroundMusic = useAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowSubtitle(true), 1500);
    setTimeout(() => setShowButton(true), 2500);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#2d1219] via-[#1a0a0f] to-[#0f0508] opacity-90" />
      
      <FloatingHearts count={25} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className={`font-display text-6xl md:text-8xl font-semibold mb-6 transition-all duration-1000 ${
            showTitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 50%, #e8a9a9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 40px rgba(236, 181, 181, 0.3)",
          }}
          data-testid="text-intro-title"
        >
          Our Love Story
        </h1>

        <p
          className={`font-body text-2xl md:text-3xl text-muted-foreground mb-12 transition-all duration-1000 delay-300 ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-testid="text-intro-subtitle"
        >
          A cinematic journey through our beautiful moments together
        </p>

        <div
          className={`transition-all duration-1000 delay-500 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            onClick={onBegin}
            className="font-body text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary-border shadow-[0_0_30px_rgba(236,181,181,0.3)] hover:shadow-[0_0_40px_rgba(236,181,181,0.5)] transition-all duration-300 hover:scale-105"
            data-testid="button-begin-story"
          >
            Begin Our Story
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-4">
        <Button
          size="icon"
          variant="outline"
          onClick={backgroundMusic.togglePlay}
          className="rounded-full bg-background/20 backdrop-blur-sm border-primary/30 hover:bg-background/30"
          data-testid="button-toggle-audio"
        >
          {backgroundMusic.isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary" />
          )}
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={backgroundMusic.toggleMute}
          className="rounded-full bg-background/20 backdrop-blur-sm border-primary/30 hover:bg-background/30"
          data-testid="button-toggle-mute"
        >
          {backgroundMusic.isMuted ? (
            <VolumeX className="w-5 h-5 text-primary" />
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </Button>
      </div>
    </div>
  );
}
