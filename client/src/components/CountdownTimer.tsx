import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function CountdownTimer() {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const startDate = new Date("2023-06-15T20:30:00");

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/40 backdrop-blur-md p-6 rounded-2xl border-2 border-primary/30 shadow-[0_0_30px_rgba(236,181,181,0.2)]">
      <div className="flex items-center gap-2 mb-3">
        <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-glow" />
        <p className="font-body text-sm text-muted-foreground" data-testid="text-countdown-label">
          Since I first said "I love you"
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Days", value: timeElapsed.days },
          { label: "Hours", value: timeElapsed.hours },
          { label: "Min", value: timeElapsed.minutes },
          { label: "Sec", value: timeElapsed.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div
              className="text-2xl font-display font-semibold text-primary mb-1"
              data-testid={`text-countdown-${item.label.toLowerCase()}`}
            >
              {item.value}
            </div>
            <div className="text-xs font-body text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
