const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Exploration", href: "#exploration" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container">
        <ul className="nav-list">
          {links.map((l) => (
            <li key={l.href}>
              <a className="nav-link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
