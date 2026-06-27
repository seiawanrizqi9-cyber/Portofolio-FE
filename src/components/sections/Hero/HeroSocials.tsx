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

const HeroSocials = () => {
  return (
    <div className="mt-12 flex gap-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-sm text-muted-foreground transition hover:text-primary"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
};

export default HeroSocials;