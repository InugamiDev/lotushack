import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
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
    <section id="faq" className="py-24 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
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

        <div className="mt-12 space-y-10">
          {categories.map((cat) => {
            const items = faqItems.filter((item) => item.category === cat.key);
            if (items.length === 0) return null;

            return (
              <div key={cat.key}>
                <SectionReveal>
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                    {cat.label}
                  </h3>
                </SectionReveal>

                <StaggerReveal
                  variant="slide-up"
                  staggerDelay={0.08}
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
