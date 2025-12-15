import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Exploration", to: "/exploration" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container">
        <ul className="nav-list">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
