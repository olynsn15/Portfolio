"use client";

import Image from "next/image";

import type { Project } from "@/data/projects";
import { usePageTransition } from "@/components/PageTransition";

interface ProjectCardProps {
  project: Project;
  number: number;
}

export default function ProjectCard({ project, number }: ProjectCardProps) {
  const { navigate } = usePageTransition();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    navigate(`/projects/${project.slug}`);
  };

  return (
    <a
      href={`/projects/${project.slug}`}
      className="project-card"
      onClick={handleClick}
    >
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

      {/* TITLE */}
      <div className="project-card-title-row">
        <h2 className="project-title">{project.title}</h2>
      </div>

      {/* TAGS */}
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={tag}>
            {tag}
            {index < project.tags.length - 1 && (
              <span className="project-tag-separator"> - </span>
            )}
          </span>
        ))}
      </div>
    </a>
  );
}
