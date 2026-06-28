import { NavLink } from "react-router-dom";
import RippleButton from "../../ui/ripple-button";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <NavLink to="/projects">
        <RippleButton className="rounded-xl bg-primary px-6 py-3 font-medium text-background transition hover:scale-105">
          View Projects
        </RippleButton>
      </NavLink>

      <NavLink to="/contact">
        <RippleButton className="rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-accent">
          Contact Me
        </RippleButton>
      </NavLink>
    </div>
  );
};

export default HeroActions;