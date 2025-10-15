import { useEffect, useState, useRef } from "react";

interface Memory {
  id: number;
  image: string;
  caption: string;
  rotation: number;
}

export default function BestMomentsGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const memories: Memory[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=500&fit=crop",
      caption: "Our first adventure together",
      rotation: -2,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop",
      caption: "Late night talks under the stars",
      rotation: 1.5,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&h=400&fit=crop",
      caption: "That perfect sunset moment",
      rotation: -1,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=500&fit=crop",
      caption: "Dancing in the rain",
      rotation: 2,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=500&h=400&fit=crop",
      caption: "Beach days and endless summer",
      rotation: -1.5,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=400&h=400&fit=crop",
      caption: "Coffee dates and conversations",
      rotation: 1,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=400&h=500&fit=crop",
      caption: "Exploring new places together",
      rotation: -2,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
      caption: "Our favorite song on repeat",
      rotation: 2,
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=500&fit=crop",
      caption: "Cozy evenings at home",
      rotation: -1,
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
          data-testid="text-best-moments-title"
        >
          Our Best Moments
        </h2>

        <p
          className={`font-body text-xl md:text-2xl text-center text-muted-foreground mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="text-best-moments-subtitle"
        >
          Every moment with you is a treasure worth keeping forever
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`group relative transition-all duration-700 hover:scale-105 hover:z-10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: `rotate(${memory.rotation}deg)`,
              }}
              data-testid={`card-memory-${memory.id}`}
            >
              <div className="relative bg-card p-4 rounded-lg shadow-2xl group-hover:shadow-[0_20px_50px_rgba(236,181,181,0.3)] transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-md mb-4">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-memory-${memory.id}`}
                  />
                </div>
                <p className="font-script text-lg text-center text-foreground/80" data-testid={`text-memory-caption-${memory.id}`}>
                  {memory.caption}
                </p>

                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/30 rounded-full blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent/20 rounded-full blur-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
