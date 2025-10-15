import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageVaultProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function MessageVault({ isOpen, onClose }: MessageVaultProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages: Message[] = [
    {
      id: 1,
      title: "To My Sunshine",
      content:
        "Every morning I wake up grateful that I get to spend another day with you. Your smile lights up my world in ways words can't describe. Thank you for being my sunshine on cloudy days.",
      date: "Always",
    },
    {
      id: 2,
      title: "Random Thoughts",
      content:
        "Sometimes I catch myself smiling for no reason, and then I realize I was thinking about you. You have this amazing power to make even ordinary moments feel special.",
      date: "Every Day",
    },
    {
      id: 3,
      title: "Forever Promise",
      content:
        "I promise to always be there for you - in your victories and your struggles, in laughter and in tears. You're not just my partner, you're my best friend, and I'll cherish you always.",
      date: "Eternally",
    },
    {
      id: 4,
      title: "What I Love About You",
      content:
        "Your kindness, your strength, your beautiful soul - there are a million things I love about you. But most of all, I love how you make me want to be a better person every single day.",
      date: "Forever",
    },
  ];

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-card/95 backdrop-blur-md rounded-2xl border-2 border-primary/30 shadow-[0_0_60px_rgba(236,181,181,0.4)] max-w-2xl w-full p-8 md:p-12 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-vault"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center mb-8">
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-glow" />
        </div>

        <h2
          className="font-display text-4xl md:text-5xl font-semibold text-center mb-8"
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-vault-title"
        >
          Message Vault
        </h2>

        <div className="mb-8">
          <div className="bg-background/30 rounded-xl p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
            <div>
              <h3
                className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4"
                data-testid={`text-message-title-${messages[currentIndex].id}`}
              >
                {messages[currentIndex].title}
              </h3>
              <p
                className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-6"
                data-testid={`text-message-content-${messages[currentIndex].id}`}
              >
                {messages[currentIndex].content}
              </p>
            </div>
            <p
              className="font-script text-lg text-muted-foreground text-right"
              data-testid={`text-message-date-${messages[currentIndex].id}`}
            >
              - {messages[currentIndex].date}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={prevMessage}
            className="rounded-full border-primary/30 hover:bg-primary/10"
            data-testid="button-prev-message"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {messages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                data-testid={`indicator-message-${index}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextMessage}
            className="rounded-full border-primary/30 hover:bg-primary/10"
            data-testid="button-next-message"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
