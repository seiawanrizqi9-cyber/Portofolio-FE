import { NavLink } from "react-router-dom";

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
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold">Rizqi</h1>

        <nav>
          <ul className="flex gap-8">
            {menus.map((menu) => (
              <li key={menu.path}>
                <NavLink to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}