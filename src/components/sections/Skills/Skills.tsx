import { skills } from "../../../data/skills";
import SkillCard from "./SkillsCard";

const groupedSkills = {
  frontend: skills.filter((skill) => skill.category === "frontend"),
  backend: skills.filter((skill) => skill.category === "backend"),
  database: skills.filter((skill) => skill.category === "database"),
};

const Skills = () => {
  return (
    <section id="skills" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A collection of tools and technologies I use to build modern,
            scalable, and maintainable applications.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="mb-6 text-2xl font-semibold capitalize">
                {category}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
