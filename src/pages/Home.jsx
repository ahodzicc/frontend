export default function Home() {
  return (
    <>
      <section className="section hero fade-in">
        <div className="container">
          <p className="eyebrow">Frontend Developer</p>
          <h2 className="heroTitle">I build clean, modern React interfaces.</h2>
          <p className="heroText">
            Welcome to my portfolio. Explore my work, experiments, and ways to
            contact me.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container twoCol">
          <div className="card photoCard">
            <img className="photo" src="/me.jpg" alt="Portrait of Amna" />
          </div>

          <div className="card">
            <h2 className="sectionTitle">A bit about me</h2>
            <p className="text">
              I’m Amna, a frontend developer focused on building responsive and
              user-friendly web experiences.
            </p>
            <p className="text">
              Tools I use: React, JavaScript, HTML/CSS, Git/GitHub, REST APIs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
