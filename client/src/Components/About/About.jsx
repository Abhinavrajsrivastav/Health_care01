import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>

      <div className="row">
        <div className="image">
          <img src="./images/about-img.svg" alt="" />
        </div>

        <div className="content">
          <h3>We Take Care of Your Mental Health</h3>
          <p>
            We offer a variety of fun events and games for you to cherish your mood.
          </p>
          <p>Interactive video meetings with the doctors and specialists.</p>
          <p>Reviews section for doctors.</p>
          <a href="#" className="btn">
            Learn More <span className="fas fa-chevron-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
