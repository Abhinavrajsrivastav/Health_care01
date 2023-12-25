import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="../images/doctor11.png" alt="doctor" />
      </div>

      <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>
        </p>
        <a href="#contact info" className="btn">
          contact us <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
}

export default Home;
