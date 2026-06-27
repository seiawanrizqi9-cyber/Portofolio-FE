import type { Skill } from "../../../types/skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-border
        bg-surface-low/50
        p-5
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/50
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{skill.name}</h3>

        <span
          className="
            text-xs
            uppercase
            tracking-wider
            text-muted-foreground
            group-hover:text-primary
            transition-colors
          "
        >
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;