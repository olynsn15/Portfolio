"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface MagneticTagProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function MagneticTag({
  children,
  className = "",
  delay = 0,
  duration = 4,
}: MagneticTagProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 120,
    damping: 18,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 120,
    damping: 18,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 220;

      if (distance < radius) {
        const strength = 1 - distance / radius;

        x.set(dx * strength * 0.45);
        y.set(dy * strength * 0.45);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`magnetic-tag-wrapper ${className}`}
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay,
        },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <motion.div
        ref={ref}
        className="hero-tag"
        style={{
          x: springX,
          y: springY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
