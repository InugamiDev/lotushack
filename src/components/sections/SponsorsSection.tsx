import { SectionReveal } from "@/components/ui/SectionReveal";
import { SponsorLogo } from "@/components/ui/SponsorLogo";
import { LotusDecoration } from "@/components/ui/LotusDecoration";
import { sponsors } from "@/data/sponsors";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-forest-950/80 py-16 backdrop-blur-sm sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="flex flex-col items-center gap-3">
            <LotusDecoration size="md" variant="gold" />
            <h2 className="section-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Our Partners
            </h2>
            <p className="text-base text-text-secondary">
              Backed by the companies building the future.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {sponsors.map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
