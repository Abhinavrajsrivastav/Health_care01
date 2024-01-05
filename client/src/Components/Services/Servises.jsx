import React,{ useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';  
import ReactDOM from 'react-dom';


const Services = (props) => {

const renderChat = (event) => { 
  event.preventDefault();
  props.setChat(true);
}


  return (
    <section className="services" id="services">

      <h1 className="heading"> our <span>services</span> </h1>

      <div className="box-container">

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>free checkups</h3>
          <a href='#book' className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
          <i className="fas fa-gamepad"></i>
          <h3>free fun games </h3>
          <a href="https://www.crazygames.com/t/candy" className="btn">Play<span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box" > 
          <i className="fas fa-user-md"></i>
          <h3>expert doctors</h3>
          <a href="#doctors" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box" > 
          <i className="fas fa-video"></i>
          <h3>Talk to experts</h3>
          <Link to="/Video" className="btn">Let's go<span className="fas fa-chevron-right"></span> </Link>
        </div>

        <div className="box">
          <i className="fas fa-notes-medical"></i>
          <h3>Read articles</h3>
          <a href="https://www.health.harvard.edu/topics/mental-health" className="btn">Read<span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box" >
          <i className="fas fa-notes-medical"></i>
          <h3>Take a quiz</h3>
          <Link to="/Quiz" className="btn">take<span className="fas fa-chevron-right"></span></Link>
        </div>

      </div>

    </section>
  );
}

export default Services;
