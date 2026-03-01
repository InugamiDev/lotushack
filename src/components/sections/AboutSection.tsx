import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/data/stats";

export function AboutSection() {
  return (
    <section id="about" className="bg-forest-900/80 py-16 backdrop-blur-sm sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: About sign illustration (text baked into image) — floating */}
            <div className="relative mx-auto w-full max-w-lg animate-float-up-down lg:max-w-none">
              <Image
                src="/assets/img/ui/about-sign-with-text.png"
                alt="Welcome to LotusHacks x HackHarvard Vietnam, the largest 36-hour hackathon in Vietnam. We're bringing together 600 builders, creators, and hackers to Ho Chi Minh City to build bold ideas."
                width={2048}
                height={3072}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
            </div>

            {/* Right: Info cards in floating-card frames — 3 top, 2 centered bottom */}
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, i) => (
                <div key={stat.title} className="w-40 sm:w-48 lg:w-52">
                  <StatCard stat={stat} index={i} />
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
