import { SectionReveal } from "@/components/ui/SectionReveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="bg-forest-900/80 py-16 backdrop-blur-sm sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionReveal>
          <div className="text-center">
            <h2
              className="section-heading text-3xl font-bold text-text-primary sm:text-4xl"
              style={{ textWrap: "balance" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
              Got questions? We&apos;ve got answers. If you don&apos;t find what
              you&apos;re looking for, reach out to us at{" "}
              <a
                href="mailto:hello@lotushack.org"
                className="text-gold-400 underline underline-offset-4 transition-colors duration-200 hover:text-gold-300"
              >
                hello@lotushack.org
              </a>
              .
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12 divide-y divide-border-subtle border-t border-border-subtle">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
