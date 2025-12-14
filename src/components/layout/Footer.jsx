export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p className="footerText">© {new Date().getFullYear()} Amna Hodžić</p>

        <div className="footerLinks">
          <a href="mailto:hodzamna4@gmail.com">Email</a>
          <a
            href="https://github.com/ahodzicc"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amna-hodzic-1b7913268"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
