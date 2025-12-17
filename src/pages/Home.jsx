import { useState } from "react";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BASIC INFO */}
      <section className="section hero fade-in">
        <div className="container">
          <p className="eyebrow">Software Engineer • Frontend</p>

          <h2 className="heroTitle">I build clean, modern React interfaces.</h2>

          <p className="heroText">
            I focus on usability, performance, and reusable component design.
          </p>

          <div className="heroMeta">
            <span className="metaPill">Vienna, Austria</span>
            <span className="metaPill">
              React • JavaScript • HTML/CSS • Git
            </span>
          </div>

          {/* CONNECT ACTION */}
          <div className="heroActions">
            <button className="button" onClick={() => setIsOpen(true)}>
              Let’s connect
            </button>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH PHOTO */}
      <section className="section">
        <div className="homeFullBleed">
          <img className="homeFullImg" src="/me.jpg" alt="Portrait of Amna" />
        </div>
      </section>

      {/* BOTTOM BOX WITH SECOND PHOTO + LINKS */}
      <section className="section">
        <div className="container">
          <div className="card homeBottomBox">
            <div className="homeBottomMedia">
              <img
                className="homeBottomImg"
                src="/me2.jpg"
                alt="Amna portrait"
              />
            </div>

            <div className="homeBottomContent">
              <h2 className="sectionTitle">Links</h2>
              <p className="text">You can reach me here:</p>

              <div className="homeLinksRow">
                <a
                  className="homeLinkBtn"
                  href="https://www.linkedin.com/in/amna-hodzic-1b7913268"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>

                <a className="homeLinkBtn" href="mailto:hodzamna4@gmail.com">
                  Email →
                </a>

                <a
                  className="homeLinkBtn"
                  href="https://github.com/ahodzicc"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT MODAL */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="sectionTitle">Let’s connect</h2>
        <p className="text">
          Send me a message and I’ll reply as soon as possible.
        </p>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="formRow">
            <label className="label">
              Name
              <input className="input" name="name" />
            </label>

            <label className="label">
              Surname
              <input className="input" name="surname" />
            </label>
          </div>

          <div className="formRow">
            <label className="label">
              Email
              <input className="input" type="email" name="email" />
            </label>

            <label className="label">
              Subject
              <input className="input" name="subject" />
            </label>
          </div>

          <label className="label">
            Message
            <textarea className="textarea" rows={6} />
          </label>

          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </Modal>
    </>
  );
}
