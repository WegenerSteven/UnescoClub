import {useEffect} from 'react';
import '../styles/About.css';
import aboutImg from '../assets/img/pngwing.com.png'

const About = () => {
  useEffect(() => {
    const btns = document.querySelectorAll('.tab-btn');
    const about = document.querySelector('.about-article');
    const articles = document.querySelectorAll('.content');

    about.addEventListener('click', function (e) {
      const id = e.target.dataset.id;
      if (id) {
        // Remove active from other buttons
        btns.forEach(function (btn) {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Hide other articles
        articles.forEach(function (article) {
          article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="title">
        <h2>About Us</h2>
        <p>
          Through our diverse programs and initiatives, the UNESCO Club aims to
          make a tangible impact on our community and the world. By empowering
          youth, fostering dialogue, and promoting sustainable practices, we
          believe we can create a more just, equitable, and harmonious society
          for all.
        </p>
      </div>
      <div className="about-center section-center">
        <article className="about-img">
          <img src={aboutImg} alt="about us" srcSet='' />
        </article>
        <article className="about-article">
          <div className="btn-container">
            <button className="tab-btn active" data-id="history">
              History
            </button>
            <button className="tab-btn" data-id="vision">
              Vision
            </button>
            <button className="tab-btn" data-id="goals">
              Goals
            </button>
          </div>
          <article className="about-content">
            <div className="content active" id="history">
              <h4>History</h4>
              <p>
                In 2020, the UNESCO Club at Kirinyaga University was established
                through the initiative of two fourth-year students, etching its
                name in the annals of the institution&apos;s history. With a shared
                passion for fostering cultural understanding, sustainable
                development, and peace, the founders embarked on a mission to
                create a platform for students to engage in global issues and
                make a meaningful impact on their community and beyond.
              </p>
            </div>
            <div className="content" id="vision">
              <h4>Vision</h4>
              <p>
                To be a leading student organization that embodies the values of
                UNESCO, fostering environmental awareness, social equity, and
                global harmony.
              </p>
            </div>
            <div className="content" id="goals">
              <h4>Goals</h4>
              <p>
                Promote UNESCO ideals within the student body. <br />
                Engage in environmental and social development activities.{" "}
                <br />
                Collaborate with the university and external organizations.{" "}
                <br />
                Facilitate platforms for dialogue and understanding. <br />
                Contribute to the achievement of world peace. <br />
              </p>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};

export default About;
