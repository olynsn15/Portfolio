import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-section">
        <div className="section-header">
          <span>PROJECTS</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={index + 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
