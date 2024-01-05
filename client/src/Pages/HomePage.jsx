import React, {useState} from "react";
import Header from "../Components/Head/Head";
import Home from "../Components/Home/Home";
import Icon from "../Components/Icon/Icon";
import Services from "../Components/Services/Servises";
import About from "../Components/About/About";
import Doctors from "../Components/Doctor/Doctors";
import Book from "../Components/Book/Book";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";
import Quiz from "../Components/Services/Quiz/Quiz";
import Head from "../Components/Head/Head";
import Video from "../Components/Services/Videocall/Video";
// import Chat from "../../../chat/Chat";

const HomePage = () => {
    const [showApp, setShowApp] = useState(false);
    const [videoCall, setVideoCall] = useState(false);
    const [chat, setChat] = useState(false);
  return (
    <>
      {showApp ? (
        <Quiz setShowApp={setShowApp} />
      ) : (
          (
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
        )
      )}
    </>
  );
};

export default HomePage;
