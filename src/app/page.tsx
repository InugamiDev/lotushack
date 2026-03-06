import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TracksSection } from "@/components/sections/TracksSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { BackToTop } from "@/components/ui/BackToTop";
import { LotusDivider } from "@/components/ui/LotusDivider";

export default function Home() {
  return (
    <>
      <SplashScreen />

      {/* Fixed full-page background with celestial atmospheric layers */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-fixed bg-[center_75%]"
        style={{ backgroundImage: "url('/assets/img/hero/bg.avif')" }}
        aria-hidden="true"
      >
        {/* Dark base */}
        <div className="absolute inset-0 bg-forest-950/75" />
        {/* Warm golden ambient from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.04] via-transparent to-transparent" />
        {/* Jade atmospheric from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-jade-600/[0.05] via-transparent to-transparent" />
        {/* Central radial golden haze */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.78 0.16 75 / 0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-400 focus:px-6 focus:py-3 focus:text-base focus:font-semibold focus:text-forest-950 focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <HeroSection />

          {/* Hero (transparent) → About (transparent) */}
          <LotusDivider prevBg="transparent" nextBg="transparent" />

          <AboutSection />

          {/* About (transparent) → Tracks (transparent) */}
          <LotusDivider prevBg="transparent" nextBg="transparent" />

          <TracksSection />

          {/* Tracks (transparent) → Sponsors (transparent) */}
          <LotusDivider prevBg="transparent" nextBg="transparent" />

          <SponsorsSection />

          {/* Sponsors (transparent) → Mentors (transparent) */}
          <LotusDivider prevBg="transparent" nextBg="transparent" />

          <MentorsSection />

          {/* Mentors (transparent) → FAQ (transparent) */}
          <LotusDivider prevBg="transparent" nextBg="transparent" />

          <FAQSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
