import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">

      <div className="box-container">

        <div className="box">
          <h3>quick links</h3>
          <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> about </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> doctors </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> book </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#"> <i className="fas fa-phone"></i> +919919088295</a>
          <a href="#"> <i className="fas fa-phone"></i> +919648502976</a>
          <a href="#"> <i className="fas fa-envelope"></i> abhiraj.srivast254@gmail.com </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Sain-Vihar Ghaziabad Uttar Pradesh</a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
          <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
          <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
          <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
          <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
        </div>

      </div>

      <div className="credit"> created by <span>Abhinav</span> | all rights reserved 2023</div>

    </section>
  );
}

export default Footer;
