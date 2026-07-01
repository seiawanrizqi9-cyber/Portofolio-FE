import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp } from "../components/ui/fade-up";
import intiFinanceImg from "../assets/intifinance.jpg";
import ecomLiteImg from "../assets/e-commerce lite.jpg";
import dashboardImg from "../assets/dashboard.webp";
import habbitForgeImg from "../assets/habbit forge.jpg";

export default function Projects() {
  return (
    <div className="py-[var(--section-gap)] pt-12 md:pt-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Header Section */}
        <section className="mb-20">
          <FadeUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Selected <span className="text-[#84a9e3]">Works</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A curated collection of digital experiences focusing on technical precision, high-performance architecture, and minimalist aesthetics.
            </p>
          </FadeUp>
        </section>

        {/* Projects Grid */}
        <section className="flex flex-col gap-8">
          
          {/* Row 1: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: IntiFinance */}
            <FadeUp delay={0.3} className="group flex flex-col rounded-[32px] border border-border bg-surface-low/30 overflow-hidden hover:bg-surface-low/50 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img 
                  src={intiFinanceImg}
                  alt="IntiFinance" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-background/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-foreground border border-border/50">
                  Backend / Frontend
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">IntiFinance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Multi tenant finance management application with authentication and role based access.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NestJS", "MongoDB", "JWT", "TypeScript"].map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-md">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mt-auto">
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeUp>

            {/* Project 2: E-Commerce Lite */}
            <FadeUp delay={0.4} className="group flex flex-col rounded-[32px] border border-border bg-surface-low/30 overflow-hidden hover:bg-surface-low/50 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img 
                  src={ecomLiteImg}
                  alt="E-Commerce Lite" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-background/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-[#4fd1c5] border border-border/50">
                  Frontend / Backend
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">E-Commerce Lite</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Modern React E-Commerce Platform.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind CSS", "Typescript"].map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-md">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mt-auto">
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Row 2: Full Width */}
          <FadeUp delay={0.5}>
            <div className="group grid grid-cols-1 md:grid-cols-2 rounded-[32px] border border-border bg-surface-low/30 overflow-hidden hover:bg-surface-low/50 transition-colors">
              <div className="relative aspect-square md:aspect-auto overflow-hidden bg-muted/20">
                <img 
                  src={dashboardImg}
                  alt="Kinerjahub Backend" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 mix-blend-screen opacity-90"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-6 inline-flex rounded-full bg-[#f97316]/10 px-4 py-1.5 text-xs font-medium text-[#f97316] border border-[#f97316]/20 self-start">
                  Enterprise Backend
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Kinerjahub Backend</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
                  Performance Assessment Management System.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {["NestJS", "PostgreSql", "Typescript"].map((tech) => (
                    <span key={tech} className="text-sm font-medium bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg">{tech}</span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c4b5fd] text-background px-6 py-3 text-sm font-bold hover:bg-[#c4b5fd]/90 transition-colors self-start">
                  Full Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Row 3: Single Column Left Aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 4: Habbit Forge Backend */}
            <FadeUp delay={0.6} className="group flex flex-col rounded-[32px] border border-border bg-surface-low/30 overflow-hidden hover:bg-surface-low/50 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                <img 
                  src={habbitForgeImg}
                  alt="Habbit Forge Backend" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute top-4 right-4 rounded-full bg-background/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-[#a78bfa] border border-border/50">
                  Backend API
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Habbit Forge Backend</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Habit Tracker Application with gamification.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Typescript", "MongoDB"].map((tech) => (
                      <span key={tech} className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-md">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mt-auto">
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeUp>
            {/* Empty right column */}
            <div className="hidden md:block"></div>
          </div>

        </section>
      </div>
    </div>
  );
}