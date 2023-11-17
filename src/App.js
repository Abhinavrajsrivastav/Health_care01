import React from 'react';
import Head from './Components/Head/Head';
import Home from './Components/Home/Home';
import Icon from './Components/Icon/Icon';
import Services from './Components/Services/Servises';
import About from './Components/About/About';
import Doctors from './Components/Doctor/Doctors';
import Book from './Components/Book/Book';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';

function App(){
  return <>
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
}

export default App;
