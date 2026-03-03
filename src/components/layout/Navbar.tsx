"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, REGISTER_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-forest-950/90 backdrop-blur-lg border-b border-gold-400/15 shadow-[0_1px_15px_oklch(0.78_0.16_75/0.05)]"
          : "bg-transparent",
      )}
    >
      {/* Golden glow line under navbar when scrolled */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent blur-sm" />
      </div>
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 touch-action-manipulation"
          aria-label="LotusHack — back to top"
        >
          <Image
            src="/assets/img/hero/logo.png"
            alt=""
            width={36}
            height={36}
            className={cn(
              "h-auto w-auto transition-transform duration-300",
              scrolled ? "scale-90" : "scale-100",
            )}
            aria-hidden="true"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-[family-name:var(--font-heading)] text-base font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-sm",
                  activeSection === link.href.slice(1)
                    ? "text-gold-400"
                    : "text-cream-50/80 hover:text-gold-400",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={REGISTER_URL}
          className="btn-register hidden min-h-[2.625rem] items-center px-6 py-3 text-base font-semibold text-gold-400 hover:text-cream-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation md:inline-flex"
        >
          <span className="brush-bg" aria-hidden="true" />
          <span className="relative">Register</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex min-h-[2.625rem] min-w-[2.625rem] items-center justify-center rounded-lg text-text-primary transition-colors duration-200 hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border-subtle bg-forest-950/95 backdrop-blur-lg motion-reduce:transition-none md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide transition-colors duration-200 hover:bg-forest-800 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950",
                    activeSection === link.href.slice(1)
                      ? "text-gold-400 bg-forest-800/50"
                      : "text-cream-50/80",
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={REGISTER_URL}
                onClick={() => setMenuOpen(false)}
                className="btn-register mt-2 inline-flex min-h-[2.625rem] items-center justify-center px-6 py-3 text-base font-semibold text-gold-400 hover:text-cream-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation"
              >
                <span className="brush-bg" aria-hidden="true" />
                <span className="relative">Register Now</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
