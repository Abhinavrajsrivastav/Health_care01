import React, {useState} from "react";
import Home from "../Components/Home/Home";
import Icon from "../Components/Icon/Icon";
import Services from "../Components/Services/Servises";
import About from "../Components/About/About";
import Doctors from "../Components/Doctor/Doctors";
import Book from "../Components/Book/Book";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";
import Head from "../Components/Head/Head";

const HomePage = () => {
  return (
    <>
            <Head />
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
