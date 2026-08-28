"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 — PRESENT",
    title: "Apple Developer Academy",
    role: "iOS Developer · Designer",
  },
  {
    year: "2024 — PRESENT",
    title: "BINUS University",
    role: "Mobile Application & Technology",
  },
  {
    year: "2024",
    title: "TFISC",
    role: "Education · Community Program",
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">
        <div className="section-header">
          <span>ABOUT ME</span>
        </div>

        <div className="about-headline">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Well hello
            <br />
            <span className="about-typewriter">there!</span>
          </motion.h1>
        </div>

        <motion.div
          className="about-intro-grid"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
        >
          <div className="about-intro-text">
            <p>
              I&apos;m Carolyn, a Mobile Application and Technology student and
              Junior iOS Developer who enjoys turning ideas into thoughtful
              digital experiences.
            </p>

            <p>
              I&apos;m curious by nature, always learning, and happiest when I
              get to build something with other people.
            </p>

            <p>
              I like exploring ideas from both the product and technical side. I
              enjoy moving between design and development — thinking about how
              something should feel, how it should work, and how the two can
              come together into one experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section className="about-section about-experience">
        <div className="section-header">
          <span>EXPERIENCE</span>
        </div>

        <div className="about-headline">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Some of
            <br />
            <span className="about-typewriter">the things I did</span>
          </motion.h1>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="experience-item"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
            >
              <div className="experience-main">
                <h3>{experience.title}</h3>
                <p>{experience.role}</p>
              </div>

              <div className="experience-year">{experience.year}</div>
            </motion.div>
          ))}
        </div>

        <div className="about-cv">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cv-link"
          >
            View my CV
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
