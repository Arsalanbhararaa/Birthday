import { useEffect, useState, useRef } from "react";
import { Home, Plane, Heart, Baby, Sparkles, Map } from "lucide-react";

interface Milestone {
  id: number;
  icon: any;
  title: string;
  description: string;
}

export default function OurFutureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const milestones: Milestone[] = [
    {
      id: 1,
      icon: Heart,
      title: "Forever Together",
      description: "Building a lifetime of love and happiness",
    },
    {
      id: 2,
      icon: Home,
      title: "Our Dream Home",
      description: "Creating a cozy space filled with memories",
    },
    {
      id: 3,
      icon: Plane,
      title: "Adventures Await",
      description: "Exploring the world hand in hand",
    },
    {
      id: 4,
      icon: Map,
      title: "New Discoveries",
      description: "Finding beauty in every journey together",
    },
    {
      id: 5,
      icon: Sparkles,
      title: "Dreams Coming True",
      description: "Supporting each other's aspirations",
    },
    {
      id: 6,
      icon: Baby,
      title: "Growing Our Family",
      description: "Starting the next beautiful chapter",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-display text-5xl md:text-7xl font-semibold text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #ecb5b5 0%, #f4d4d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-our-future-title"
        >
          Our Future Together
        </h2>

        <p
          className={`font-body text-xl md:text-2xl text-center text-muted-foreground mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="text-our-future-subtitle"
        >
          All the beautiful dreams we'll make come true
        </p>

        <div className="relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 transition-all duration-2000 ${
              isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative flex items-center gap-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                } ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-testid={`card-milestone-${milestone.id}`}
              >
                <div className="flex-1" />

                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_rgba(236,181,181,0.5)] group-hover:shadow-[0_0_40px_rgba(236,181,181,0.7)] transition-all">
                    <milestone.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className={`bg-card/40 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-[0_10px_40px_rgba(236,181,181,0.3)] transition-all group ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    <h3
                      className="font-display text-2xl md:text-3xl font-semibold mb-2 text-primary"
                      data-testid={`text-milestone-title-${milestone.id}`}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="font-body text-lg text-foreground/80"
                      data-testid={`text-milestone-description-${milestone.id}`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
