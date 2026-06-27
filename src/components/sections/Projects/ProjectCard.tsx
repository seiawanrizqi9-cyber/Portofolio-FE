import type { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="
        group
        rounded-3xl
        border border-border
        bg-surface-low/50
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/50
      "
    >
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          {project.featured && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-border
                px-3 py-1
                text-sm
                text-muted-foreground
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                bg-primary
                px-5
                py-2.5
                text-sm
                font-medium
                text-background
              "
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border border-border
                px-5
                py-2.5
                text-sm
                font-medium
              "
            >
              Github
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
