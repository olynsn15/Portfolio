"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticTag from "./MagneticTag";

const titles = [
  {
    text: "iOS DEVELOPER",
    className: "tag-ios",
    delay: 0.15,
    duration: 4,
  },
  {
    text: "UI/UX DESIGNER",
    className: "tag-design",
    delay: 0.25,
    duration: 5,
  },
  {
    text: "PRODUCT THINKER",
    className: "tag-product",
    delay: 0.35,
    duration: 6,
  },
  {
    text: "CURIOUS BUILDER",
    className: "tag-builder",
    delay: 0.45,
    duration: 4.5,
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Floating titles */}
        <div className="hero-tags">
          {titles.map((title) => (
            <MagneticTag
              key={title.text}
              className={title.className}
              delay={title.delay}
              duration={title.duration}
            >
              {title.text}
            </MagneticTag>
          ))}
        </div>

        {/* Main name */}
        <motion.h1
          className="hero-name"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          CAROLYN
          <br />
          SANTANA
        </motion.h1>

        {/* Small decoration */}
        <motion.div
          className="hero-star"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          ✦
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
        >
          <Link href="/about" className="hero-scroll-link">
            <span>Know more about me</span>

            <motion.span
              className="hero-scroll-arrow"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
