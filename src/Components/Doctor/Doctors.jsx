import React from 'react';
import './Doctors.css';

const Doctors = () => {
  return (
    <React.Fragment>
      <section className="doctors" id="doctors">
        <h1 className="heading">Some of our <span>doctors</span></h1>
        <div className="box-container">
          <div className="box">
            <img src="https://www.shutterstock.com/image-vector/cartoon-doctor-medical-white-coat-600nw-1533881711.jpg" alt="Doctor Kumar"></img>
            <h3>Doctor Kumar</h3>
            <span>Physician</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          {/* Repeat the structure for other doctors... */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Doctors;
