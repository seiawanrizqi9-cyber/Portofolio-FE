const socials = [
  {
    label: "Github",
    href: "https://github.com/seiawanrizqi9-cyber",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-rizqi-setiawan/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/st.one_09/",
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
