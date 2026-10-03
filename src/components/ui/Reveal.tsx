"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Apparition douce au scroll. Utilisé avec modération (cf. doc technique
 * point 17 : pas d'animations partout, performance mobile-first prioritaire).
 */
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
