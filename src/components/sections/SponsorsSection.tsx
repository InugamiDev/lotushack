import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SponsorCarousel } from "@/components/ui/SponsorCarousel";
import { SponsorLogoWall } from "@/components/ui/SponsorLogoWall";
import { LotusDecoration } from "@/components/ui/LotusDecoration";
import { sponsors } from "@/data/sponsors";

const featuredSponsors = sponsors.filter((s) => s.logo && s.description);

const supporters = [
  {
    name: "SIHUB — Startup and Innovation Hub of Ho Chi Minh City",
    logo: "/assets/img/supporters/sihub.png",
    url: "https://sihub.gov.vn/en",
    width: 500,
    height: 500,
    sizeClass: "w-28 sm:w-40 md:w-48",
    bgClass: "rounded-full bg-white/90 p-2 sm:p-3",
  },
  {
    name: "Cerebral Valley",
    logo: "/assets/img/supporters/cerebral-valley.png",
    url: "https://cerebralvalley.ai",
    width: 500,
    height: 500,
    sizeClass: "w-48 sm:w-72 md:w-80",
  },
  {
    name: "Trung Tam Thong Tin va Chuong Trinh Giao Duc TP.HCM",
    logo: "/assets/img/supporters/tttt-ctgd.png",
    url: "https://ttthongtin.hcm.edu.vn",
    width: 500,
    height: 500,
    sizeClass: "w-28 sm:w-40 md:w-48",
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="overflow-hidden py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Supported by */}
        <SectionReveal variant="fade-scale">
          <div className="mb-20 flex flex-col items-center sm:mb-24">
            <h3 className="section-heading text-2xl font-bold tracking-[0.15em] text-cream-50 sm:text-3xl md:text-4xl">
              Supported by
            </h3>
            <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12 md:gap-16">
              {/* CV first row on mobile, inline on desktop */}
              <a
                href={supporters[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={supporters[1].name}
                className="flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 sm:order-2"
              >
                <Image
                  src={supporters[1].logo}
                  alt={supporters[1].name}
                  width={supporters[1].width}
                  height={supporters[1].height}
                  className={`h-auto object-contain ${supporters[1].sizeClass}`}
                />
              </a>
              {/* SIHUB + TTTT: side-by-side row on mobile, flanking on desktop */}
              <div className="flex items-center justify-center gap-8 sm:contents">
                {[supporters[0], supporters[2]].map((s, i) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 ${i === 0 ? "sm:order-1" : "sm:order-3"} ${s.bgClass ?? ""}`}
                  >
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={s.width}
                      height={s.height}
                      className={`h-auto object-contain ${s.sizeClass}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal variant="fade-scale">
          <div className="flex flex-col items-center gap-3">
            <LotusDecoration size="md" variant="gold" />
            <h2 className="section-heading text-4xl font-bold tracking-[0.15em] text-cream-50 sm:text-5xl md:text-6xl">
              Sponsors
            </h2>
            <div className="mx-auto mt-4 h-px w-20 shimmer-gold" />
            <p className="text-base text-text-secondary sm:text-lg">
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
