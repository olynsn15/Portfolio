"use client";

import "@/styles/project-details.css";

import { useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectBackLink from "@/components/ProjectBackLink";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [titleRevealed, setTitleRevealed] = useState(false);

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="project-detail">
      {/* =========================================
          BACK
      ========================================= */}

      <Reveal>
        <ProjectBackLink className="project-back" />
      </Reveal>

      {/* =========================================
          PROJECT INFORMATION
      ========================================= */}

      <section className="project-detail-header">
        {/* TITLE + DESCRIPTION */}

        <Reveal delay={0.1} onRevealComplete={() => setTitleRevealed(true)}>
          <div className="project-heading">
            <h1>
              <Typewriter
                text={project.title}
                start={titleRevealed}
                speed={50}
                className="project-typewriter"
              />
            </h1>

            <p className="project-description">{project.description}</p>
          </div>
        </Reveal>

        {/* PROJECT DETAILS */}

        <Reveal delay={0.1}>
          <dl className="project-meta">
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>

            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>

            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>

            <div>
              <dt>Tech stack</dt>
              <dd>
                {project.tags.map((tag, index) => (
                  <span key={tag}>
                    {tag}

                    {index < project.tags.length - 1 && (
                      <span className="project-tag-sep">, </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* =========================================
          PROJECT IMAGES
      ========================================= */}

      <section className="project-gallery-section">
        <Reveal delay={0.1}>
          <div className="project-gallery-header">
            <span>PROJECT IMAGES</span>
          </div>

          <div className="project-detail-gallery">
            <div className="project-gallery-item">
              <Image
                src={project.thumbnail}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            <div className="project-gallery-item">
              <Image
                src={project.hoverImage}
                alt={`${project.title} alternate project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================
          GITHUB
      ========================================= */}

      {project.github && (
        <Reveal delay={0.1}>
          <div className="project-github-wrapper">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
            >
              <span>View on GitHub</span>
              <span className="project-github-arrow">
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </Reveal>
      )}
    </main>
  );
}
