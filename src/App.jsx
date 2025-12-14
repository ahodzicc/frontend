import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ padding: 24 }}>
        <section id="about" style={{ padding: "60px 0" }}></section>
        <section id="skills" style={{ padding: "60px 0" }}></section>
        <section id="projects" style={{ padding: "60px 0" }}></section>
        <section id="contact" style={{ padding: "60px 0" }}></section>
      </main>
    </>
  );
}
