"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { T } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#1e1712" }}
    >
      {/* ── FOTO ──────────────────────────────────────────────────
          Mobile : cobre o fundo inteiro (inset-0)
          Desktop: ocupa só o lado direito (md:left-auto md:w-[45%])
      ─────────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 md:inset-auto md:top-0 md:right-0 md:w-[45%] md:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/ana.jpg"
          alt="Ana — Creative Project Manager & UX Researcher"
          fill
          priority
          className="object-cover object-top"
        />

        {/* Mobile: gradiente de baixo para cima (cobre ~50% inferior) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to top, #1e1712 38%, rgba(30,23,18,0.75) 62%, rgba(30,23,18,0.15) 85%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Desktop: gradiente da esquerda para cobrir a transição foto→texto */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to left, transparent 25%, #1e1712 90%), linear-gradient(to top, #1e1712 0%, transparent 35%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* ── CONTEÚDO ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-14 md:pb-24 md:flex md:items-end md:min-h-[100dvh]">
        <div className="md:max-w-[58%]">

          {/* Tag */}
          <motion.div
            className="inline-flex items-center gap-2 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <span className="w-7 h-[2px] flex-shrink-0" style={{ backgroundColor: "#c97a5d" }} aria-hidden="true" />
            <span className="text-[11px] tracking-[0.18em] uppercase font-medium leading-snug" style={{ color: "#c97a5d" }}>
              {T.hero.tag}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-playfair text-[2.85rem] sm:text-6xl md:text-7xl leading-[1.06] mb-5"
            style={{ color: "#f5f0e8" }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {T.hero.h1_1}{" "}
            <em className="not-italic" style={{ color: "#c97a5d" }}>{T.hero.h1_accent1}</em>
            <br />
            {T.hero.h1_2}{" "}
            <em className="not-italic" style={{ color: "#a3b18a" }}>{T.hero.h1_accent2}</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-sm md:text-lg leading-relaxed max-w-md mb-8"
            style={{ color: "rgba(194,212,178,0.9)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88, ease: "easeOut" }}
          >
            {T.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-[14px] rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              style={{ backgroundColor: "#c97a5d", color: "#f5f0e8" }}
            >
              {T.hero.cta1}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-[14px] rounded-full text-sm font-medium border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(245,240,232,0.22)", color: "#f5f0e8" }}
            >
              {T.hero.cta2}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR — só desktop ──────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#a3b18a" }}>
          {T.hero.scroll}
        </span>
        <motion.div
          className="w-[1px] h-8"
          style={{ backgroundColor: "#a3b18a" }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
