import { SectionReveal } from "@/components/ui/SectionReveal";
import { SponsorCarousel } from "@/components/ui/SponsorCarousel";
import { SponsorLogoWall } from "@/components/ui/SponsorLogoWall";
import { LotusDecoration } from "@/components/ui/LotusDecoration";
import { sponsors } from "@/data/sponsors";

const featuredSponsors = sponsors.filter((s) => s.logo && s.description);

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal variant="fade-scale">
          <div className="flex flex-col items-center gap-3">
            <LotusDecoration size="md" variant="gold" />
            <h2 className="section-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Our Partners
            </h2>
            <div className="mx-auto mt-3 h-px w-16 shimmer-gold" />
            <p className="text-base text-text-secondary">
              Backed by the companies building the future.
            </p>
          </div>
        </SectionReveal>

        {/* Featured carousel */}
        <SectionReveal delay={0.15}>
          <div className="mt-12">
            <SponsorCarousel sponsors={featuredSponsors} />
          </div>
        </SectionReveal>

        {/* Divider */}
        <div className="mx-auto my-12 h-px w-32 shimmer-gold" />

        {/* Logo wall */}
        <SectionReveal delay={0.25}>
          <SponsorLogoWall sponsors={sponsors} />
        </SectionReveal>
      </div>
    </section>
  );
}
