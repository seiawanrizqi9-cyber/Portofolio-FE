import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3">
        <h1 className="text-3xl font-bold tracking-tight">Portofolio</h1>

        <nav>
          <ul className="flex items-center gap-6">
            {menus.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.path} className="relative">
                  <NavLink
                    to={menu.path}
                    className={`relative z-10 block py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {menu.name}
                  </NavLink>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 z-0 h-[2px] bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}