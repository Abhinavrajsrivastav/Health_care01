import React from 'react';
import './Review.css';

const Review = () => {
  const reviewImg = "../images/Abhi.jpg";
  return (
    <section className="review" id="review">
      <h1 className="heading">client's <span>review</span></h1>

      <div className="box-container">

        <div className="box">
             <img src={reviewImg} alt="Abhinav" />
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
          <img src="../images/Ayus.jpg" alt="Arbab" />
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
          <img src="../images/Ant.jpg" alt="Tanya" />
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
