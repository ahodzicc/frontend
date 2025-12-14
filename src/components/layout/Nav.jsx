const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <ul className="nav-list">
        {links.map((l) => (
          <li key={l.href}>
            <a className="nav-link" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
