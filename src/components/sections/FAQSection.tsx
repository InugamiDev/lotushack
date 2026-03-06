import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { LotusDecoration } from "@/components/ui/LotusDecoration";
import { faqItems } from "@/data/faq";
import type { FAQCategory } from "@/data/faq";

const categories: { key: FAQCategory; label: string }[] = [
  { key: "general", label: "General" },
  { key: "tracks", label: "Tracks & Prizes" },
  { key: "registration", label: "Registration & Teams" },
  { key: "logistics", label: "Logistics" },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-36">
      {/* Floating glowing lotus decorations */}
      <LotusDecoration
        size="lg"
        variant="gold"
        className="pointer-events-none absolute left-[5%] top-[12%] opacity-10 animate-lotus-drift-glow drop-shadow-[0_0_10px_oklch(0.78_0.16_75/0.5)] motion-reduce:animate-none"
      />
      <LotusDecoration
        size="md"
        variant="gold"
        className="pointer-events-none absolute right-[8%] top-[25%] opacity-[0.07] animate-lotus-float-glow drop-shadow-[0_0_8px_oklch(0.78_0.16_75/0.4)] motion-reduce:animate-none"
        style={{ animationDelay: "3s" }}
      />
      <LotusDecoration
        size="lg"
        variant="gold"
        className="pointer-events-none absolute right-[4%] bottom-[18%] opacity-10 animate-lotus-drift-glow drop-shadow-[0_0_10px_oklch(0.78_0.16_75/0.5)] motion-reduce:animate-none"
        style={{ animationDelay: "1.5s" }}
      />
      <LotusDecoration
        size="md"
        variant="gold"
        className="pointer-events-none absolute left-[7%] bottom-[30%] opacity-[0.07] animate-lotus-float-glow drop-shadow-[0_0_8px_oklch(0.78_0.16_75/0.4)] motion-reduce:animate-none"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="text-center">
            <h2
              className="section-heading text-4xl font-bold tracking-[0.15em] text-cream-50 sm:text-5xl md:text-6xl"
              style={{ textWrap: "balance" }}
            >
              FAQ
            </h2>
            <div className="mx-auto mt-4 h-px w-20 shimmer-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-base text-text-secondary sm:text-lg">
              Got questions? We&apos;ve got answers. If you don&apos;t find what
              you&apos;re looking for, reach out to us at{" "}
              <a
                href="mailto:team@lotushack.org"
                className="text-gold-400 underline underline-offset-4 transition-colors duration-200 hover:text-gold-300"
              >
                team@lotushack.org
              </a>
              .
            </p>
          </div>
        </SectionReveal>

        {/* 2×2 category grid */}
        <div className="mt-12 grid gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-10">
          {categories.map((cat, catIdx) => {
            const items = faqItems.filter((item) => item.category === cat.key);
            if (items.length === 0) return null;

            return (
              <div key={cat.key}>
                <SectionReveal
                  variant={catIdx % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={catIdx * 0.08}
                >
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                    {cat.label}
                  </h3>
                </SectionReveal>

                <StaggerReveal
                  variant="slide-up"
                  staggerDelay={0.06}
                  className="divide-y divide-gold-400/15 border-t border-b border-gold-400/15"
                >
                  {items.map((item) => (
                    <AccordionItem key={item.question} item={item} />
                  ))}
                </StaggerReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
