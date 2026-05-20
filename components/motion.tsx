"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const Motion = motion;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
