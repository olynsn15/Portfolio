"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  number: number;
}

export default function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      {/* IMAGE */}
      <div className="project-card-image">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          className="project-image project-image-default"
        />

        <Image
          src={project.hoverImage}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          className="project-image project-image-hover"
        />
      </div>

      {/* META */}
      <div className="project-card-meta">
        <div className="project-card-meta-left">
          <span className="project-card-number">
            {String(number).padStart(2, "0")}
          </span>

          <span className="project-category">{project.category}</span>
        </div>

        <span className="project-year">{project.year}</span>
      </div>

      {/* TITLE */}
      <div className="project-card-title-row">
        <h2 className="project-title">{project.title}</h2>

        <span className="project-arrow">↗</span>
      </div>

      {/* DESCRIPTION */}
      <p className="project-description">{project.description}</p>
    </Link>
  );
}
