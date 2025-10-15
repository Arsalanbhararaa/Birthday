import { Heart } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface FloatingNavigationProps {
  sections: Section[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function FloatingNavigation({
  sections,
  activeSection,
  onNavigate,
}: FloatingNavigationProps) {
  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      data-testid="nav-floating"
    >
      <div className="bg-card/40 backdrop-blur-md rounded-full p-3 border-2 border-primary/20 shadow-[0_0_30px_rgba(236,181,181,0.2)]">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onNavigate(index)}
              className="group relative"
              aria-label={`Navigate to ${section.label}`}
              data-testid={`button-nav-${section.id}`}
            >
              <div className="relative">
                <Heart
                  className={`w-6 h-6 transition-all duration-300 ${
                    activeSection === index
                      ? "text-primary fill-primary scale-125"
                      : "text-muted-foreground fill-none hover:text-primary hover:fill-primary/50"
                  }`}
                />
                {activeSection === index && (
                  <div className="absolute inset-0">
                    <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-glow blur-sm" />
                  </div>
                )}
              </div>

              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-primary/30 whitespace-nowrap">
                  <span className="font-body text-sm text-foreground">
                    {section.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
