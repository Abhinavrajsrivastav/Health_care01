import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Components/Head/Head';
import Home from './Components/Home/Home';
import Icon from './Components/Icon/Icon';
import Services from './Components/Services/Servises';
import About from './Components/About/About';
import Doctors from './Components/Doctor/Doctors';
import Book from './Components/Book/Book';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Quiz from '../client/src/Components/Services/Quiz/Quiz';

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <>
      {showApp ? (
        <Quiz setShowApp={setShowApp} />
      ) : (
        <>
          <Head />
          <Home />
          <Icon />
          <Services setShowApp={setShowApp} />
          <About />
          <Doctors />
          <Book />
          <Review />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;