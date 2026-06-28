import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import { FadeUp } from "../../ui/fade-up";

const Projects = () => {
  return (
    <section id="projects" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-6">
        <FadeUp className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Featured Work</h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A selection of projects that showcase my approach to building modern
            applications and solving real-world problems.
          </p>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to see other projects? Check out my <a href="#" className="text-primary hover:underline transition">GitHub page</a>.
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

export default Projects;
