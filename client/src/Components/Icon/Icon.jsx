import React from 'react';
import './Icon.css';

const Icon = () => {
  return (
    <section className="icons-container">
      <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>10+</h3>
        <p>Doctors in contact</p>
      </div>

      <div className="icons">
        <i className="fas fa-users"></i>
        <h3>35+</h3>
        <p>Satisfied patients</p>
      </div>

      <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>5+</h3>
        <p>Affiliated Hospitals</p>
      </div>
    </section>
  );
}

export default Icon;
