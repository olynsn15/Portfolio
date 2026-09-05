import "@/styles/project-details.css";

import type { Metadata } from "next";

import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectBackLink from "@/components/ProjectBackLink";
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

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      {/* HEADER */}

      <Reveal>
        <section className="project-detail-header">
          <ProjectBackLink className="project-back" />

          <h1>{project.title}</h1>

          <p className="project-detail-description">{project.description}</p>

          <div className="project-meta">
            <div>
              <span>YEAR</span>
              <p>{project.year}</p>
            </div>

            <div>
              <span>PLATFORM</span>
              <p>iOS</p>
            </div>

            <div>
              <span>TECHNOLOGY</span>
              <p>{project.tags.join(" · ")}</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* HERO IMAGE */}

      <Reveal delay={0.1}>
        <section className="project-detail-image">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1600}
            height={1200}
            priority
          />
        </section>
      </Reveal>

      {/* CONTENT */}

      <Reveal delay={0.15}>
        <section className="project-detail-content">
          <div>
            <p className="project-detail-label">ABOUT THE PROJECT</p>
          </div>

          <div>
            <p className="project-overview">{project.description}</p>

            <div className="project-highlights">
              <p>HIGHLIGHTS</p>

              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}

      <Reveal delay={0.1}>
        <footer className="project-detail-footer">
          <ProjectBackLink />
        </footer>
      </Reveal>
    </main>
  );
}
