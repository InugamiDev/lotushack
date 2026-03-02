import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/data/stats";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: About sign illustration with pagoda behind */}
          <SectionReveal variant="slide-left">
            <div className="relative mx-auto w-full max-w-lg animate-float-up-down lg:max-w-none overflow-visible">
              {/* Pagoda tower — bottom-right, half visible */}
              <div
                className="pointer-events-none absolute -right-[55%] bottom-[5%] w-[120%] opacity-60"
                aria-hidden="true"
              >
                <Image
                  src="/assets/img/hero/pagoda-tower.png"
                  alt=""
                  width={900}
                  height={1350}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
              <Image
                src="/assets/img/ui/about-sign-with-text.png"
                alt="Welcome to LotusHacks x HackHarvard Vietnam, the largest 36-hour hackathon in Vietnam. We're bringing together 600 builders, creators, and hackers to Ho Chi Minh City to build bold ideas."
                width={2048}
                height={3072}
                className="relative h-auto w-full"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
            </div>
          </SectionReveal>

          {/* Right: Info cards — slide in from right */}
          <SectionReveal variant="slide-right" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, i) => (
                <div key={stat.title} className="w-40 sm:w-48 lg:w-52">
                  <StatCard stat={stat} index={i} />
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
