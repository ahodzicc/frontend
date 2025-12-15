export default function Home() {
  return (
    <>
      <section className="section hero fade-in">
        <div className="container">
          <p className="eyebrow">Frontend Developer</p>
          <h2 className="heroTitle">Amna Hodžić</h2>
          <p className="heroText">
            I build clean, responsive interfaces in React and I enjoy turning
            designs into reusable components.
          </p>

          <div className="card twoCol" style={{ marginTop: 18 }}>
            <div className="photoCard">
              <img className="photo" src="/me.jpg" alt="Portrait of Amna" />
            </div>
            <div>
              <h3 className="sectionTitle">Basic info</h3>
              <p className="text">📍 Vienna</p>
              <p className="text">⚡ React • JS • HTML/CSS • Git</p>
              <p className="text">🎯 Looking for frontend opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
