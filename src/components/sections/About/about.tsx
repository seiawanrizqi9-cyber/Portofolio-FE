import { FadeUp } from "../../ui/fade-up";

const About = () => {
  return (
    <section id="about" className="py-[var(--section-gap)]">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <div>
            <FadeUp delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Me
              </span>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Building software with
                <span className="text-primary"> purpose </span>
                and clean architecture.
              </h2>
            </FadeUp>
          </div>

          {/* Right Side */}
          <div className="space-y-6 text-muted-foreground leading-8">
            <FadeUp delay={0.3}>
              <p>
                I'm a software developer who enjoys building modern web
                applications with a strong focus on maintainability, scalability,
                and user experience.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p>
                My main interests are backend architecture, API development, and
                creating beautiful frontend experiences that feel smooth and
                intuitive.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <p>
                Currently, I'm continuously improving my skills in fullstack
                development while exploring software architecture, system design,
                and cloud technologies.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
