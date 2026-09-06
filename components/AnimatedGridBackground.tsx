"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedGridBackground() {
  const reduceMotion = useReducedMotion();

  return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="technical-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
      <motion.div
        className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
        animate={reduceMotion ? undefined : { y: [0, 220, 0], opacity: [0.15, 0.55, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
