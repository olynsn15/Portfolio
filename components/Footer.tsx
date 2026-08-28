"use client";

import "@/styles/footer.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.7, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <footer ref={footerRef} className="footer">
      <motion.div
        className="footer-content"
        style={{
          opacity,
          y,
        }}
      >
        <div className="footer-main">
          <p className="footer-eyebrow">CONNECT WITH ME</p>

          <h2 className="footer-title">Let&apos;s build something together.</h2>

          <div className="footer-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Carolyn Santana</p>
        </div>
      </motion.div>
    </footer>
  );
}
