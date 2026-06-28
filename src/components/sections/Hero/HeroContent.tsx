import { FadeUp } from "../../ui/fade-up";

const HeroContent = () => {
  return (
    <>
      <FadeUp delay={0.1}>
        <span className="mb-4 inline-block text-sm font-medium text-primary">
          Hello there 👋
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Hi, I'm <span className="text-primary">Rizqi</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <h2 className="mt-6 text-2xl font-semibold text-muted-foreground md:text-3xl">
          Fullstack Developer
        </h2>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I build modern web applications with scalable backend architecture,
          elegant frontend experiences, and a strong focus on maintainability.
        </p>
      </FadeUp>
    </>
  );
};

export default HeroContent;
