import "@/styles/projects.css";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <Reveal>
        <section className="projects-section">
          <div className="section-header">
            <span>PROJECTS</span>
            <span>SELECTED WORK</span>
          </div>

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
