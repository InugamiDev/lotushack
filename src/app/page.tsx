import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TracksSection } from "@/components/sections/TracksSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { LotusDivider } from "@/components/ui/LotusDivider";

/* Section bg tokens — single source of truth */
const BG_900 = "bg-forest-900/80 backdrop-blur-sm";
const BG_950 = "bg-forest-950/80 backdrop-blur-sm";

export default function Home() {
  return (
    <>
      <SplashScreen />

      {/* Fixed full-page background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-fixed bg-[center_75%]"
        style={{ backgroundImage: "url('/assets/img/hero/bg.avif')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-forest-950/70" />
      </div>

      <div className="relative z-10">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          {/* Hero → no bg */}
          <HeroSection />
          {/* Hero (transparent) → About (900) */}
          <LotusDivider prevBg={BG_900} nextBg={BG_900} />
          {/* About → 900 */}
          <AboutSection />
          {/* About (900) → Tracks (950) */}
          <LotusDivider prevBg={BG_900} nextBg={BG_950} />
          {/* Tracks → 950 */}
          <TracksSection />
          {/* Tracks (950) → Timeline (900) */}
          <LotusDivider prevBg={BG_950} nextBg={BG_900} />
          {/* Timeline → 900 */}
          <TimelineSection />
          {/* Timeline (900) → Sponsors (950) */}
          <LotusDivider prevBg={BG_900} nextBg={BG_950} />
          {/* Sponsors → 950 */}
          <SponsorsSection />
          {/* Sponsors (950) → FAQ (900) */}
          <LotusDivider prevBg={BG_950} nextBg={BG_900} />
          {/* FAQ → 900 */}
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
