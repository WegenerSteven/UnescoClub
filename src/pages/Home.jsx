import { useEffect } from "react";
import "../styles/Home.css";
const Home = () => {
  useEffect(() => {
    //NavBar toggle
    let menu = document.querySelector(".navbar");

    document.querySelector("#menu-btn").onClick = () => {
      menu.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("active");
    };

    //Home colourise
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      const slides = document.querySelectorAll(".slider-slide");

      slides.forEach((slide) => (slide.style.opacity = 0));
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].style.opacity = 1;
      setTimeout(showSlides, 5000);
    }
  }, []);
  return (
    <section className="home" id="home">
      <div className="container1">
        <div className="slider">
          <div className="slider-slides home-container">
            <div className="slider-slide main-content1">
              <div className="detail">
                <h1>Welcome to</h1>
                <h2>unesco club</h2>
                <h1>Kirinyaga university</h1>
              </div>
              <p>
                UNESCO Club is a student organization that aims to promote the
                values of UNESCO in the campus community. We organize various
                activities and events to raise awareness about the importance of
                education, science, culture, and communication. Join us and be
                part of a global movement to build peace in mind.
              </p>
            </div>
            <div className="slider-slide main-content2">
              <div className="detail">
                <h1>Our aim</h1>
              </div>
              <p>
                We as a club we aim on impacting other students in collaborating
                and participating in environmental activities and other
                humanitarian activities to help in building a better world for
                the future generation. We also aim at promoting the values of
                UNESCO in the campus community.
              </p>
            </div>
            <div className="slider-slide main-content3">
              <div className="detail">
                <h1>Why join?</h1>
              </div>
              <p>
                Join our club to participate in various activities and events
                that aim to make a positive impact on our campus and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
