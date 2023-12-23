import React from "react";
import Header from "../Components/Head/Head";
import Home from "../Components/Home/Home";
import Icon from "../Components/Icon/Icon";
import Services from "../Components/Services/Servises";
import About from "../Components/About/About";
import Doctors from "../Components/Doctor/Doctors";
import Book from "../Components/Book/Book";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Home />
      <Icon />
      <Services />
      <About />
      <Doctors />
      <Book />
      <Review />
      <Footer />
    </>
  );
};

export default HomePage;
