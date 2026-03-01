import Image from "next/image";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { REGISTER_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Pagoda background */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[600px] max-w-[90vw] -translate-x-1/2 opacity-30">
        <Image
          src="/assets/img/hero/pagoda-tower.png"
          alt=""
          width={600}
          height={900}
          priority
          aria-hidden="true"
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 90vw, 600px"
          quality={80}
        />
      </div>

      {/* Floating lanterns */}
      <div
        className="pointer-events-none absolute left-[10%] top-[15%] z-0 animate-lantern-sway opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={60}
          height={100}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>
      <div
        className="pointer-events-none absolute right-[12%] top-[20%] z-0 animate-float-slow opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={48}
          height={80}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>
      <div
        className="pointer-events-none absolute left-[25%] top-[8%] z-0 animate-float-medium opacity-30"
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={36}
          height={60}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>
      <div
        className="pointer-events-none absolute right-[30%] top-[12%] z-0 animate-lantern-sway opacity-35"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={42}
          height={70}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Glow effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl animate-glow-pulse"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo */}
        <Image
          src="/assets/img/hero/logo.png"
          alt="LotusHack logo"
          width={80}
          height={80}
          priority
          className="h-20 w-20"
        />

        {/* Title */}
        <h1
          className="section-heading text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ textWrap: "balance" }}
        >
          LOTUS
          <span className="text-gold-400">HACK</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
          Presented by LotusHacks &times; HackHarvard
        </p>

        {/* Date */}
        <p className="text-lg text-gold-400 sm:text-xl">
          March 20–22, 2026 &middot; VNG Campus
        </p>

        {/* Tagline */}
        <p
          className="max-w-2xl text-lg text-text-secondary sm:text-xl"
          style={{ textWrap: "balance" }}
        >
          Let&apos;s build the biggest hackathon in Vietnam — and beyond.
          Join 800+ builders in shaping a defining moment for SE Asia&apos;s
          builder community.
        </p>

        {/* Countdown */}
        <CountdownTimer />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[2.625rem] items-center justify-center rounded-lg bg-gold-400 px-8 py-4 text-base font-semibold text-forest-950 transition-colors duration-200 hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="inline-flex min-h-[2.625rem] items-center justify-center rounded-lg border border-gold-400/40 px-8 py-4 text-base font-semibold text-gold-400 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-forest-900 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
