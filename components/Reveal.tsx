"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  onRevealComplete?: () => void;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  onRevealComplete,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      onAnimationComplete={() => {
        onRevealComplete?.();
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}
