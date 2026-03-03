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
            <div className="relative mx-auto w-full max-w-xl animate-float-up-down lg:max-w-none overflow-visible">
              <Image
                src="/assets/img/ui/about-sign-with-text.png"
                alt="Welcome to LotusHacks x HackHarvard Vietnam, the largest 36-hour hackathon in Vietnam. We're bringing together 600 builders, creators, and hackers to Ho Chi Minh City to build bold ideas."
                width={2048}
                height={3072}
                className="relative h-auto w-full"
                sizes="(max-width: 1024px) 90vw, 50vw"
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
