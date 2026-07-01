import { LimelightNav } from "../ui/limelight-nav";

const menus = [
  { id: "home", label: "Home", path: "/home" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3">
        <h1 className="text-3xl font-bold tracking-tight">Portofolio</h1>

        <LimelightNav items={menus} />
      </div>
    </header>
  );
}