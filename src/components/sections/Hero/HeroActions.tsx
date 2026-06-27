const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:scale-105">
        View Projects
      </button>

      <button className="rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-accent">
        Contact Me
      </button>
    </div>
  );
};

export default HeroActions;