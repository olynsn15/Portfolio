"use client";

import { useState } from "react";

import "@/styles/projects.css";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";

export default function ProjectsPage() {
  const [projectRevealed, setProjectRevealed] = useState(false);

  return (
    <main className="projects-page">
      <Reveal>
        <section className="projects-section">
          <div className="section-header">
            <span>SELECTED WORK</span>
          </div>

          <Reveal delay={0.1} onRevealComplete={() => setProjectRevealed(true)}>
            <div className="about-headline">
              <h1>
                <Typewriter
                  text="What I’ve built"
                  start={projectRevealed}
                  speed={80}
                  className="about-typewriter"
                />
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  number={index + 1}
                />
              ))}
            </div>
          </Reveal>
        </section>
      </Reveal>
    </main>
  );
}
