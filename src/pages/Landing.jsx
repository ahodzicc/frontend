import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

export default function Landing() {
  return (
    <>
      <Header />
      <Nav />

      <main style={{ padding: 24 }}>
        <section id="about" style={{ padding: "60px 0" }}>
          <h2>About</h2>
        </section>

        <section id="skills" style={{ padding: "60px 0" }}>
          <h2>Skills</h2>
        </section>

        <section id="projects" style={{ padding: "60px 0" }}>
          <h2>Projects</h2>
        </section>

        <section id="contact" style={{ padding: "60px 0" }}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
