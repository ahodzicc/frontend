import { NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Exploration", to: "/exploration" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <div className="container footerTop">
        {/* Left */}
        <div className="footerCol">
          <p className="footerName">Amna Hodzic</p>
          <p className="footerMeta">Software Engineer</p>
        </div>

        {/* Middle */}
        <nav aria-label="Footer navigation">
          <ul className="footerNavList">
            {links
              .filter((l) => l.to !== pathname)
              .map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="footerNavLink">
                    {l.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>

        {/* Right */}
        <div className="footerCol footerRight">
          <p className="footerMeta">hodzamna4@gmail.com</p>
          <p className="footerMeta">Vienna, Austria</p>
        </div>
      </div>

      <div className="container footerBottom">
        <p className="footerCopyright">
          © 2025 Amna Hodzic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
