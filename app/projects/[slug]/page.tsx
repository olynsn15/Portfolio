import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
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
      <section className="project-detail-header">
        <Link href="/projects" className="project-back">
          ← Back to projects
        </Link>

        <p className="project-detail-category">{project.category}</p>

        <h1>{project.title}</h1>

        <p className="project-detail-description">{project.description}</p>

        {/* META */}
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

      {/* HERO IMAGE */}
      <section className="project-detail-image">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1600}
          height={1200}
          priority
        />
      </section>

      {/* CONTENT */}
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

      {/* FOOTER */}
      <footer className="project-detail-footer">
        <Link href="/projects">← Back to all projects</Link>
      </footer>
    </main>
  );
}
