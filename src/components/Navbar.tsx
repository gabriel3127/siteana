"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { lang, toggle, T } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: T.nav.about, href: "#about" },
    { label: T.nav.services, href: "#services" },
    { label: T.nav.work, href: "#portfolio" },
    { label: T.nav.process, href: "#process" },
    { label: T.nav.contact, href: "#contact" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#1e1712" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-playfair text-[#f5f0e8] text-xl font-bold tracking-wider"
            aria-label="Ana — home"
          >
            ANA.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#c2d4b2] hover:text-[#f5f0e8] transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}

            {/* Language toggle */}
            <LangToggle lang={lang} toggle={toggle} />

            <a
              href="#contact"
              className="text-sm bg-[#c97a5d] text-[#f5f0e8] px-5 py-2.5 rounded-full hover:bg-[#a85e43] transition-colors duration-200 font-medium"
            >
              {T.nav.cta}
            </a>
          </nav>

          {/* Mobile right: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LangToggle lang={lang} toggle={toggle} />
            <button
              className="flex flex-col gap-[5px] p-2 focus-visible:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block w-6 h-[2px] bg-[#f5f0e8] rounded-full"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-[#f5f0e8] rounded-full"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-[#f5f0e8] rounded-full"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8"
            style={{ backgroundColor: "#1e1712" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-playfair text-4xl text-[#f5f0e8] hover:text-[#c97a5d] transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={close}
              className="mt-4 text-base bg-[#c97a5d] text-[#f5f0e8] px-8 py-3.5 rounded-full font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {T.nav.cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Language Toggle pill ── */
function LangToggle({ lang, toggle }: { lang: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
      className="relative flex items-center rounded-full p-[3px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c97a5d]"
      style={{
        backgroundColor: "rgba(245,240,232,0.1)",
        border: "1px solid rgba(245,240,232,0.15)",
      }}
    >
      {/* Sliding indicator */}
      <motion.span
        className="absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-full"
        style={{ backgroundColor: "#c97a5d" }}
        animate={{ left: lang === "en" ? "3px" : "calc(50%)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <span
        className="relative z-10 px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200"
        style={{ color: lang === "en" ? "#f5f0e8" : "rgba(245,240,232,0.5)" }}
      >
        EN
      </span>
      <span
        className="relative z-10 px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200"
        style={{ color: lang === "pt" ? "#f5f0e8" : "rgba(245,240,232,0.5)" }}
      >
        PT
      </span>
    </button>
  );
}
