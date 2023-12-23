import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">

      <h1 className="heading"> our <span>services</span> </h1>

      <div className="box-container">

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>free checkups</h3>
          <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-gamepad"></i>
          <h3>free fun games </h3>
          <a href="https://www.kibagames.com/Mini-Games" className="btn"> Explore games<span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>expert doctors</h3>
          <a href="#doctors" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-video"></i>
          <h3>Video Meet with Doctors</h3>
          <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-procedures"></i>
          <h3>Doctor Review</h3>
          <a href="#review" className="btn"> Check Reviews <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>Self-analysis for depression</h3>
          <a href="http://127.0.0.1:5501/" className="btn"> Check <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>Check if you need to go for treatment</h3>
          <a href="ind.html" className="btn"> Check <span className="fas fa-chevron-right"></span> </a>
        </div>

      </div>

    </section>
  );
}

export default Services;
