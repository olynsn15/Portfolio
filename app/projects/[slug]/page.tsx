import "@/styles/project-details.css";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectBackLink from "@/components/ProjectBackLink";
import ProjectSlideshow from "@/components/ProjectSlideshow";
import Reveal from "@/components/Reveal";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `CS - ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const currentIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="project-detail">
      <Reveal>
        <ProjectBackLink className="project-back" />

        <div className="project-detail-grid">
          {/* LEFT — PROJECT INFORMATION */}
          <div className="project-detail-info">
            <div className="project-heading">
              <span className="project-year">{project.year}</span>

              <h1>{project.title}</h1>

              <p className="project-description">{project.description}</p>
            </div>

            <dl className="project-meta">
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

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                View on GitHub
              </a>
            )}
          </div>

          {/* RIGHT — SLIDESHOW */}
          <div className="project-detail-visual">
            <ProjectSlideshow
              images={[project.thumbnail, project.hoverImage]}
              title={project.title}
            />
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="project-next">
          <span>Next project</span>
          <Link href={`/projects/${nextProject.slug}`}>
            {nextProject.title}
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
