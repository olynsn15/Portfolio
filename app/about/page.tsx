"use client";

import "@/styles/about.css";

import { experiences } from "@/data/experience";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <main className="about-page">
      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">
        <Reveal>
          <div className="section-header">
            <span>ABOUT ME</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-headline">
            <h1>
              Well hello
              <br />
              <span className="about-typewriter">there!</span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <p>
                I&apos;m Carolyn, a Mobile Application and Technology student
                and Junior iOS Developer who enjoys turning ideas into
                thoughtful digital experiences.
              </p>

              <p>
                I&apos;m curious by nature, always learning, and happiest when I
                get to build something with other people.
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
        <Reveal>
          <div className="section-header">
            <span>EXPERIENCE</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-headline">
            <h1>
              Some of
              <br />
              <span className="about-typewriter">the things I did</span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="experience-list">
            {experiences.map((experience) => (
              <div key={experience.title} className="experience-item">
                <div className="experience-main">
                  <h3>{experience.title}</h3>
                  <p>{experience.role}</p>
                </div>

                <div className="experience-year">{experience.year}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
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
