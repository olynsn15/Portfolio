"use client";

import { useState } from "react";

import "@/styles/about.css";

import { experiences } from "@/data/experience";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";

export default function About() {
  const [introRevealed, setIntroRevealed] = useState(false);
  const [experienceRevealed, setExperienceRevealed] = useState(false);

  return (
    <main className="about-page">
      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">
        {/* ABOUT ME */}

        <Reveal>
          <div className="section-header">
            <span>ABOUT ME</span>
          </div>
        </Reveal>

        {/* TYPEWRITER */}

        <Reveal delay={0.1} onRevealComplete={() => setIntroRevealed(true)}>
          <div className="about-headline">
            <h1>
              <Typewriter
                text="Well hello there!"
                start={introRevealed}
                speed={50}
                className="about-typewriter"
              />
            </h1>
          </div>
        </Reveal>

        {/* INTRO TEXT */}

        <Reveal delay={0.4}>
          <div className="about-intro-grid">
            <div>
              <p>
                I&apos;m Carolyn, a Mobile Application and Technology student
                and Junior iOS Developer who enjoys turning ideas into
                thoughtful digital experiences.
              </p>

              <p>
                I like exploring ideas from both the product and technical side.
                I enjoy moving between design and development — thinking about
                how something should feel, how it should work, and how the two
                can come together into one experience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section className="about-section about-experience">
        {/* SECTION HEADER */}

        <Reveal>
          <div className="section-header">
            <span>EXPERIENCE</span>
          </div>
        </Reveal>

        {/* TYPEWRITER */}

        <Reveal
          delay={0.1}
          onRevealComplete={() => setExperienceRevealed(true)}
        >
          <div className="about-headline">
            <h1>
              <Typewriter
                text="What shaped me"
                start={experienceRevealed}
                speed={50}
                className="about-typewriter"
              />
            </h1>
          </div>
        </Reveal>

        {/* EXPERIENCE LIST */}

        <Reveal delay={0.4}>
          <div className="experience-list">
            {experiences.map((experience) => (
              <div key={experience.title} className="experience-item">
                <div className="experience-main">
                  <h3>{experience.title}</h3>
                  <p>{experience.location}</p>
                </div>

                <div className="experience-year">{experience.year}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CV */}

        <Reveal delay={0.1}>
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
        </Reveal>
      </section>
    </main>
  );
}
