// import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact" style={{ padding: "6rem 0", backgroundColor: "##04AA6D" }}>
      <center>
        <p
          className="section-subtitle"
          id="project-label"
          style={{ textTransform: "capitalize", fontSize: "2rem" }}
        >
          need help?
        </p>
        <h2 className="h2 section-title">Contact us today.</h2>
      </center>
      <div className="project-container contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
            <img src="images/c.jpeg" alt="" />
          </div>
          <h2>Contact Us</h2>
          <p>To reach us, kindly call us or send us an email.</p>
          <ul className="contact__details">
            <li>
              <a href="tel:+254769320325" className="links">
                <i className="bx bx-phone"></i>+254769320325
              </a>
            </li>
            <li>
              <h5>
                <a
                  href="mailto:kirinyagauniversityunesco@gmail.com"
                  className="links"
                >
                  <i className="bx bxs-envelope"></i>{" "}
                  kirinyagauniversityunesco@gmail.com
                </a>
              </h5>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/DaphiqbKGPvRM3cu9"
                target="_blank"
                className="links"
              >
                <i className="bx bxs-location-plus"></i>
                <h5>Kutus, kenya - 13404</h5>
              </a>
            </li>
          </ul>
        </aside>
        <form className="contact__form" name="submit-to-google-sheet">
          <div className="form__name">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="Email Address"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="Message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
          <span id="msg"></span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
