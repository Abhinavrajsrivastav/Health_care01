import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">client's <span>review</span></h1>

      <div className="box-container">

        <div className="box">
          <img src="url_for_ekansh_image" alt="Ekansh" />
          <h3>Abhinav</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text"></p>
        </div>

        <div className="box">
          <img src="url_for_arbab_image" alt="Arbab" />
          <h3>Ayush</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text"></p>
        </div>

        <div className="box">
          <img src="url_for_tanya_image" alt="Tanya" />
          <h3>Anant</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text"></p>
        </div>

      </div>
    </section>
  );
}

export default Review;
