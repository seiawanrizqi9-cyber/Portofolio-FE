import { skills } from "../../../data/skills";
import SkillCard from "./SkillsCard";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "../../../components/ui/marquee";

const Skills = () => {
  return (
    <section id="skills" className="py-[var(--section-gap)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            A collection of tools and technologies I use to build modern Websites,
            scalable components, RESTful APIs, and maintainable applications.
          </p>
        </div>
      </div>

      <div className="mt-8 relative">
        <Marquee className="py-4">
          <MarqueeFade side="left" />
          <MarqueeContent speed={40}>
            {skills.map((skill) => (
              <MarqueeItem key={skill.name} className="mx-3 w-[250px] py-1">
                <SkillCard skill={skill} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
