import { skills } from "../data/skills";
import SkillCard from "../components/sections/Skills/SkillsCard";

export default function Skills() {
  const backendSkills = skills.filter(
    (skill) => skill.category === "backend" || skill.category === "database"
  );
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");

  return (
    <div className="py-[var(--section-gap)] pt-12 md:pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            My Capabilities
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Technical Arsenal
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A deep dive into the technologies and tools I rely on to build scalable, high-performance web applications.
          </p>
        </div>

        <div className="space-y-24">
          {/* Backend & Database Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary to-transparent opacity-50 hidden md:block"></div>
            <div className="mb-10 text-center md:text-left md:pl-8">
              <h2 className="text-3xl font-bold md:text-4xl text-primary">
                Backend Architecture
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed text-lg">
                The backbone of any robust application. My backend development focuses on creating resilient RESTful APIs, optimizing database schemas, and ensuring absolute security. These are the primary tools I use to power complex business logic and handle high-volume data:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pl-8">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          {/* Frontend Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-secondary to-transparent opacity-50 hidden md:block"></div>
            <div className="mb-10 text-center md:text-left md:pl-8">
              <h2 className="text-3xl font-bold md:text-4xl text-secondary">
                Frontend Experiences
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed text-lg">
                Translating logic into intuitive, pixel-perfect user interfaces. On the frontend, I prioritize accessibility, seamless micro-interactions, and fluid responsiveness across all devices using modern JavaScript frameworks and utility-first CSS.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pl-8">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          {/* Core Concepts & Architecture Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-tertiary to-transparent opacity-50 hidden md:block"></div>
            <div className="mb-10 text-center md:text-left md:pl-8">
              <h2 className="text-3xl font-bold md:text-4xl text-tertiary">
                Core Concepts & Architecture
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed text-lg">
                Beyond coding, building scalable software requires a strong understanding of system design and architectural patterns. These are the core principles and methodologies I apply to ensure code quality, maintainability, and security:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pl-8">
              {[
                "Multi-tenant Architecture",
                "Monorepo Architecture",
                "Authentication & Authorization",
                "REST API",
                "JWT Authentication",
                "Route-based SPA",
                "Component-based Architecture",
                "NoSQL Database Design",
                "API Documentation",
                "Design System & Tokens",
              ].map((concept) => (
                <div
                  key={concept}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-surface-low/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-tertiary/50 hover:shadow-lg"
                >
                  <div className="h-2 w-2 rounded-full bg-tertiary"></div>
                  <span className="font-medium text-sm leading-tight text-text-primary group-hover:text-tertiary transition-colors">{concept}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}