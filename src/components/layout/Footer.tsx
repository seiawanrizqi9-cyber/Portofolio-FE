const socials = [
  {
    label: "Github",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Email",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-3 py-4 sm:flex-row">
        <p className="text-muted-foreground text-sm">© 2026 Rizqi. All rights reserved.</p>

        <div className="flex gap-6">
          {socials.map((social) => {
            return (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition hover:text-primary"
                aria-label={social.label}
              >
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
