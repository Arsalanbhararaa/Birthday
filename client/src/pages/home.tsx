import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import IntroSection from "@/components/IntroSection";
import HowWeMetSection from "@/components/HowWeMetSection";
import BestMomentsGallery from "@/components/BestMomentsGallery";
import HeartfeltMessageSection from "@/components/HeartfeltMessageSection";
import OurFutureSection from "@/components/OurFutureSection";
import BirthdayFinaleSection from "@/components/BirthdayFinaleSection";
import FloatingNavigation from "@/components/FloatingNavigation";
import MessageVault from "@/components/MessageVault";
import ForeverUsSignature from "@/components/ForeverUsSignature";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showVault, setShowVault] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "intro", label: "Start" },
    { id: "how-we-met", label: "How We Met" },
    { id: "best-moments", label: "Best Moments" },
    { id: "heartfelt", label: "What You Mean" },
    { id: "our-future", label: "Our Future" },
    { id: "birthday", label: "Birthday" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a0a0f] via-[#2d1219] to-[#1a0a0f] text-foreground overflow-x-hidden">
      <section
        id="intro"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen"
      >
        <IntroSection onBegin={() => setShowContent(true)} />
      </section>

      {showContent && (
        <>
          <section
            id="how-we-met"
            ref={(el) => (sectionRefs.current[1] = el)}
            className="min-h-screen"
          >
            <HowWeMetSection />
          </section>

          <section
            id="best-moments"
            ref={(el) => (sectionRefs.current[2] = el)}
            className="py-24"
          >
            <BestMomentsGallery />
          </section>

          <section
            id="heartfelt"
            ref={(el) => (sectionRefs.current[3] = el)}
            className="min-h-screen"
          >
            <HeartfeltMessageSection />
          </section>

          <section
            id="our-future"
            ref={(el) => (sectionRefs.current[4] = el)}
            className="py-24"
          >
            <OurFutureSection />
          </section>

          <section
            id="birthday"
            ref={(el) => (sectionRefs.current[5] = el)}
            className="min-h-screen"
          >
            <BirthdayFinaleSection />
          </section>

          <section className="py-24">
            <ForeverUsSignature />
          </section>

          <FloatingNavigation
            sections={sections}
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />

          <button
            onClick={() => setShowVault(true)}
            className="fixed bottom-8 left-8 z-50 group"
            aria-label="Open message vault"
            data-testid="button-message-vault"
          >
            <div className="relative">
              <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-glow drop-shadow-[0_0_15px_rgba(236,181,181,0.5)]" />
              <div className="absolute inset-0 animate-heart-beat">
                <Heart className="w-12 h-12 text-primary/30 fill-primary/30 blur-sm" />
              </div>
            </div>
          </button>

          <MessageVault isOpen={showVault} onClose={() => setShowVault(false)} />
        </>
      )}
    </div>
  );
}
