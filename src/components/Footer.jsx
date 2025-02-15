import '../styles/Footer.css';
const Footer = ()=> {
    return (
      <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Unesco <i className="las la-h-square"></i> </h3>
          <p>Follow us on our different social media platforms for more...</p>
          <div className="share">
            <a href="https://facebook.com/groups/796639718242594/" target="_blank" className='bx bxl-facebook-circle'> </a>
            <a href="https://www.instagram.com/kyu_unesco_club?igsh=aXg5dW5heGZtN2px" target="_blank" className='bx bxl-instagram-alt'></a>
            <a href="https://x.com/KyuUnesco?t=S48dBltWDS_eawt7yLoFEA&s=08" target="_blank" className='bx bxl-twitter'></a>
            <a href="https://www.linkedin.com/groups/10051137/" target="_blank" className='bx bxl-linkedin'></a>
          </div>
        </div>
        <div className="box">
          <h3>Contact info</h3>
          <a href="tel:+254769320325" className="links"><i className='bx bx-phone'></i>+254769320325</a>
          <a href="tel:+254799997183" className="links"><i className='bx bx-phone'></i>+254799997183</a>
          <a href="mailto:kirinyagauniversityunesco@gmail.com" className="links"><i className='bx bxs-envelope'></i> kirinyagauniversityunesco@gmail.com</a>
          <a href="https://maps.app.goo.gl/DaphiqbKGPvRM3cu9" target="_blank" className="links"><i className='bx bxs-location-plus'></i> Kutus, kenya - 13404</a>
        </div>
        <div className="box">
          <h3>Quick links</h3>
          <a href="#home" className="links"><i className='bx bx-right-arrow-alt'></i> home</a>
          <a href="#about" className="links"><i className='bx bx-right-arrow-alt'></i>about</a>
          <a href="#events" className="links"><i className='bx bx-right-arrow-alt'></i> Events</a>
          <a href="/Sign-login/sign.html" target="_blank" className="links"><i className='bx bx-right-arrow-alt'></i> Portal</a>
          <a href="#contact" className="links"><i className='bx bx-right-arrow-alt'></i> contacts</a>
        </div>
        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="http://localhost:3001/subscribe" method="POST" id="subscrbeForm">
            <input type="email" placeholder="your email" id="email" className="email" />
            <input type="submit" value="subscribe" className="btn" id="subscribeBtn" />
          </form>
          <p id="responseMessage"></p>
        </div>
      </div>
      <div className="credit">created by <span>benaIct department</span> | &copy; all rights reserved </div>
    </section>
    );
  }

  export default Footer;
  
  