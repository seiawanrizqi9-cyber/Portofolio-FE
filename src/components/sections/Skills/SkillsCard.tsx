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
        <div className="flex items-center gap-3">
          {skill.icon && typeof skill.icon === 'string' ? (
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
          ) : skill.icon ? (
            <skill.icon className="w-5 h-5" />
          ) : null}
          <h3 className="font-medium">{skill.name}</h3>
        </div>

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