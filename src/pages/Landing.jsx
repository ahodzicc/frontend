import { useState } from "react";

import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";

export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <Nav />

      <main className="main">
        {/* HOME */}
        <section id="home" className="section hero fade-in">
          <div className="container">
            <p className="eyebrow">Frontend Developer</p>

            <h2 className="heroTitle">
              I build clean, modern React interfaces.
            </h2>

            <p className="heroText">
              Welcome to my portfolio. Scroll to see my work, exploration, and
              how to contact me.
            </p>

            <button className="button" onClick={() => setOpen(true)}>
              Let’s connect
            </button>
          </div>
        </section>

        {/* IMAGE + QUICK INFO */}
        <section className="section">
          <div className="container twoCol">
            <div className="card photoCard">
              <img className="photo" src="/me.jpg" alt="Portrait of Amna" />
            </div>

            <div className="card">
              <h2 className="sectionTitle">A bit about me</h2>
              <p className="text">
                I’m Amna, a frontend developer focused on building responsive
                and user-friendly web experiences. I enjoy turning designs into
                clean, reusable React components.
              </p>
              <p className="text">
                Tools I use: React, JavaScript, HTML/CSS, Git/GitHub, and REST
                APIs.
              </p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container">
            <h2 className="sectionTitle">Work</h2>
            <p className="text">
              Project cards will go here (Live link + GitHub link).
            </p>
          </div>
        </section>

        {/* EXPLORATION */}
        <section id="exploration" className="section">
          <div className="container">
            <h2 className="sectionTitle">Exploration</h2>
            <p className="text">
              Things I’m learning / experimenting with (animations, UI patterns,
              new libraries, etc.).
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="sectionTitle">About</h2>
            <p className="text">
              Longer “about me” section (your story, what you’re looking for,
              what motivates you).
            </p>
          </div>
        </section>

        {/* CONTACT (CTA only, modal has the form) */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="sectionTitle">Contact</h2>
            <p className="text">
              Want to collaborate or have a question? Send me a message.
            </p>

            <button className="button" onClick={() => setOpen(true)}>
              Open contact form
            </button>
          </div>
        </section>
      </main>

      {/* MODAL CONTACT FORM */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="sectionTitle">Let’s connect</h2>
        <p className="text">
          Send me a message and I’ll reply as soon as possible.
        </p>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="formRow">
            <label className="label">
              Name
              <input className="input" name="name" placeholder="Your name" />
            </label>

            <label className="label">
              Surname
              <input
                className="input"
                name="surname"
                placeholder="Your surname"
              />
            </label>
          </div>

          <div className="formRow">
            <label className="label">
              Email
              <input
                className="input"
                type="email"
                name="email"
                placeholder="you@email.com"
              />
            </label>

            <label className="label">
              Subject
              <input className="input" name="subject" placeholder="Subject" />
            </label>
          </div>

          <label className="label">
            Message
            <textarea
              className="textarea"
              name="message"
              placeholder="Write your message..."
              rows={6}
            />
          </label>

          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </Modal>

      <Footer />
    </>
  );
}
