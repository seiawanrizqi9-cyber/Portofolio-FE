import { FadeUp } from "../components/ui/fade-up";
import RippleButton from "../components/ui/ripple-button";
import { TiltCard } from "../components/ui/tilt-card";
import profileImg from "../assets/myself.jpeg";

export default function About() {
  return (
    <div className="py-[var(--section-gap)] pt-12 md:pt-24">
      <div className="container mx-auto px-6">
        {/* HERO SECTION */}
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-40">
          {/* Image */}
          <FadeUp delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-low/50">
              <img
                src={profileImg}
                alt="Profile Portrait"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </FadeUp>

          {/* Hero Content */}
          <div className="space-y-8">
            <FadeUp delay={0.2}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                THE MIND BEHIND THE MACHINE
              </span>
              <h1 className="mt-4 text-5xl font-bold md:text-6xl lg:text-7xl leading-[1.1]">
                Crafting Digital <br />
                <span className="text-primary italic font-serif">
                  Experiences.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                I am a multidisciplinary designer and engineer focused on
                building bridges between complex technology and human-centric
                experiences. With over 3 years of experience, I blend technical
                precision with artistic intuition to create products that don't
                just work—they resonate.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-wrap gap-4 pt-4">
              <div className="rounded-2xl border border-border bg-surface-low/30 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">03+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Years Exp.
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface-low/30 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Projects
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface-low/30 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Awards
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* WHAT I DO SECTION */}
        <section className="mb-40">
          <FadeUp delay={0.1}>
            <h2 className="text-3xl font-bold md:text-4xl mb-12 border-b border-border pb-4 inline-block">
              What I Do
            </h2>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-3">
            <FadeUp delay={0.2}>
              <TiltCard className="group h-full rounded-3xl border border-border bg-surface-low/30 p-8 backdrop-blur-sm transition-colors hover:bg-surface-low/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Systems
                  <br />
                  Architecture
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Building robust, scalable foundations for complex web
                  applications using modern cloud infrastructures and
                  microservices.
                </p>
              </TiltCard>
            </FadeUp>

            <FadeUp delay={0.3}>
              <TiltCard className="group h-full rounded-3xl border border-border bg-surface-low/30 p-8 backdrop-blur-sm transition-colors hover:bg-surface-low/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Interface
                  <br />
                  Design
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Creating pixel-perfect, accessible, and emotionally engaging
                  user interfaces with a focus on motion and glassmorphism.
                </p>
              </TiltCard>
            </FadeUp>

            <FadeUp delay={0.4}>
              <TiltCard className="group h-full rounded-3xl border border-border bg-surface-low/30 p-8 backdrop-blur-sm transition-colors hover:bg-surface-low/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Fullstack
                  <br />
                  Development
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Bridging the gap between design and logic with clean, performant
                  code in React, Node.js, and modern CSS frameworks.
                </p>
              </TiltCard>
            </FadeUp>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="mb-40">
          <div className="text-center mb-24">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-bold">My Journey</h2>
              <p className="text-muted-foreground mt-2">
                Evolution of a Creative Mind
              </p>
            </FadeUp>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Center Line */}
            <div className="absolute left-[24px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {/* Item 1 - Left */}
              <FadeUp
                delay={0.2}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 w-full relative z-10">
                  <div className="text-sm font-bold text-primary mb-1">
                    2026 — Present
                  </div>
                  <div className="text-xl font-bold mb-1">
                    Backend & Architecture Studies
                  </div>
                  <div className="text-muted-foreground text-sm mb-4">
                    Continuous Learning
                  </div>
                  <div className="rounded-2xl border border-border bg-surface-low/60 p-5 backdrop-blur-md text-sm text-muted-foreground inline-block text-left md:text-right shadow-lg">
                    I've started expanding my skills into the backend domain,
                    learning about database design, system architecture, queue
                    management, deployment pipelines, and more.
                  </div>
                </div>
                <div className="absolute left-[20px] md:left-1/2 w-[9px] h-[9px] rounded-full bg-background border-2 border-primary md:-translate-x-1/2 top-1 md:top-auto shadow-[0_0_10px_var(--color-primary)] z-20"></div>
                <div className="md:w-1/2 hidden md:block"></div>
              </FadeUp>

              {/* Item 2 - Right */}
              <FadeUp
                delay={0.3}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 hidden md:block"></div>
                <div className="absolute left-[20px] md:left-1/2 w-[9px] h-[9px] rounded-full bg-background border-2 border-secondary md:-translate-x-1/2 top-1 md:top-auto shadow-[0_0_10px_var(--color-secondary)] z-20"></div>
                <div className="md:w-1/2 md:pl-12 pl-16 w-full text-left relative z-10">
                  <div className="text-sm font-bold text-secondary mb-1">
                    2025
                  </div>
                  <div className="text-xl font-bold mb-1">
                    Junior Frontend Developer
                  </div>
                  <div className="text-muted-foreground text-sm mb-4">
                    Pondok IT Indonesia
                  </div>
                  <div className="rounded-2xl border border-border bg-surface-low/60 p-5 backdrop-blur-md text-sm text-muted-foreground inline-block shadow-lg">
                    I started out as a beginner front-end developer. I actively
                    created various personal websites for practice, starting
                    with the basics of HTML, CSS, JavaScript, and TypeScript,
                    and eventually experimenting with React.
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mb-20">
          <FadeUp delay={0.2}>
            <div className="rounded-[40px] border border-border bg-surface-low/30 px-6 py-20 text-center backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10">
                Ready to build <br className="hidden md:block" />
                something{" "}
                <span className="text-primary italic font-serif">iconic?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto relative z-10">
                I'm currently open for select collaborations and leadership
                roles in forward-thinking companies.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
                <RippleButton className="rounded-full bg-primary px-8 py-4 font-bold text-background transition hover:scale-105 shadow-[0_0_20px_var(--color-primary)]">
                  Let's Connect
                </RippleButton>
                <RippleButton className="rounded-full border border-border px-8 py-4 font-bold transition hover:bg-surface-low/50">
                  Download CV
                </RippleButton>
              </div>
            </div>
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
