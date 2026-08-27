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

const interests = [
  "Interaction design",
  "Motion",
  "Product thinking",
  "Creative technology",
];

export default function About() {
  return (
    <main className="about-page">
      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">
        <div className="about-eyebrow">
          <span>ABOUT ME</span>
          <span>01</span>
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
            Building with
            <br />
            <span className="about-typewriter">purpose.</span>
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
          <div className="about-intro-label">
            <span>A LITTLE ABOUT ME</span>
          </div>

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
          </div>
        </motion.div>
      </section>

      {/* =========================================
          HOW I WORK
      ========================================= */}

      <section className="about-section about-work">
        <div className="about-section-header">
          <span>02</span>
          <span>HOW I LIKE TO WORK</span>
        </div>

        <div className="about-work-content">
          <h2>
            I like exploring ideas from
            <br />
            both the <em>product</em> and
            <br />
            <em>technical</em> side.
          </h2>

          <p>
            I enjoy moving between design and development — thinking about how
            something should feel, how it should work, and how the two can come
            together into one experience.
          </p>
        </div>
      </section>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section className="about-section about-experience">
        <div className="about-section-header">
          <span>03</span>
          <span>EXPERIENCE</span>
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
              <div className="experience-year">{experience.year}</div>

              <div className="experience-main">
                <h3>{experience.title}</h3>
                <p>{experience.role}</p>
              </div>

              <div className="experience-arrow">→</div>
            </motion.div>
          ))}
        </div>

        <div className="about-cv">
          <p>Want to know more about my experience?</p>

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

      {/* =========================================
          CURRENTLY CURIOUS ABOUT
      ========================================= */}

      <section className="about-section about-curious">
        <div className="about-section-header">
          <span>04</span>
          <span>CURRENTLY CURIOUS ABOUT</span>
        </div>

        <div className="curious-content">
          <div className="curious-intro">
            <h2>
              Always learning,
              <br />
              always exploring.
            </h2>
          </div>

          <div className="curious-list">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                className="curious-item"
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
              >
                <span>0{index + 1}</span>
                <span>{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
