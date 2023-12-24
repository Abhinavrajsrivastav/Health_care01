import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="../images/doctor.jpg" alt="doctor" />
      </div>

      <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>
          Welcome to Mental Health Care. It is a one-stop solution to your Mental health problem where you can interact with the doctors, book appointments, and even play mini-games to energize yourself
        </p>
        <a href="#contact info" className="btn">
          contact us <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
}

export default Home;
