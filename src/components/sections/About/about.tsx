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
                I'm a{" "}
                <span className="text-primary font-medium">
                  Software Developer
                </span>{" "}
                who enjoys building useful applications and websites. I focus on
                creating things that are easy to maintain, scale well as they
                grow, and most importantly, provide a great experience for the
                people using them.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p>
                My main interests are designing reliable databases, building
                APIs, and creating system that are engaging, seamless, and
                intuitive for everyone.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <p>
                Currently, I'm continuously improving my skills in{" "}
                <span className="text-[#a78bfa] font-medium">
                  software development
                </span>{" "}
                while learning how to build better and more secure systems for
                everyday users.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
