import { FadeUp } from "../components/ui/fade-up";
import { Mail, MapPin } from "lucide-react";
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";

export default function Contact() {
  return (
    <div className="py-[var(--section-gap)] pt-12 md:pt-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-[900px]">
        {/* Header Section */}
        <section className="mb-16 text-center">
          <FadeUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Let's <span className="text-[#a78bfa]">Connect.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Hi, I'm a junior software engineer looking to gain knowledge and
              experience. I'm always happy to take on new opportunities to learn
              or collaborate. Want to get to know me better?
            </p>
          </FadeUp>
        </section>

        {/* Contact Card */}
        <FadeUp delay={0.3}>
          <div className="rounded-[32px] border border-border bg-surface-low/30 overflow-hidden backdrop-blur-sm">
            <div className="p-8 md:p-14">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Info */}
                <div className="flex flex-col gap-8">
                  {/* Name */}
                  <div className="flex gap-5 items-start">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <span className="font-bold text-xl">R</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Name
                      </h3>
                      <p className="text-lg font-medium">
                        Muhammad Rizqi Setiawan
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-5 items-start">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#84a9e3]/10 text-[#84a9e3]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Email
                      </h3>
                      <a
                        href="mailto:seiawanrizqi9@gmail.com"
                        className="text-lg font-medium hover:text-[#84a9e3] transition-colors"
                      >
                        seiawanrizqi9@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-5 items-start">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4fd1c5]/10 text-[#4fd1c5]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Location
                      </h3>
                      <p className="text-lg font-medium">
                        Pondok IT, Yogyakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-6 md:pl-8 md:border-l border-border">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Social Ecosystem
                  </h3>

                  <a
                    href="https://linkedin.com/in/seiawanrizqi9"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background transition-colors group-hover:border-[#84a9e3]">
                      <img
                        src={linkedinImg}
                        alt="LinkedIn"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="font-medium group-hover:text-[#84a9e3] transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://github.com/seiawanrizqi9-cyber"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background transition-colors group-hover:border-foreground">
                      <img
                        src={githubImg}
                        alt="GitHub"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-[300px] md:h-[400px] w-full bg-muted/20 relative border-t border-border">
              <iframe
                src="https://www.google.com/maps/place/Pondok+IT/@-7.9963577,110.2928948,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a57d3554e3c31:0xf12f0cd502f34b39!8m2!3d-7.996363!4d110.2954697!16s%2Fg%2F11ng672p5v?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-background/90 backdrop-blur-md px-5 py-2.5 text-sm font-bold border border-border/50 shadow-lg">
                <span className="w-3 h-3 rounded-full bg-[#4fd1c5] animate-pulse"></span>
                Yogyakarta Base Ops
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
