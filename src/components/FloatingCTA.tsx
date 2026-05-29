"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function FloatingCTA() {
  const { T } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium shadow-2xl transition-transform duration-150 active:scale-95"
            style={{ backgroundColor: "#c97a5d", color: "#f5f0e8", boxShadow: "0 8px 32px rgba(201,122,93,0.45)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 5.5l5 3.5 5-3.5M3 5.5h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {T.floating}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
