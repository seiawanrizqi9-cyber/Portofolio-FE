import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Featured Work</h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A selection of projects that showcase my approach to building modern
            applications and solving real-world problems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
