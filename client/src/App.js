import React from "react";
import Head from "./Components/Head/Head";
import Home from "./Components/Home/Home";
import Icon from "./Components/Icon/Icon";
import Services from "./Components/Services/Servises";
import About from "./Components/About/About";
import Doctors from "./Components/Doctor/Doctors";
import Book from "./Components/Book/Book";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Header from "./Components/Head/Head";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Head />
        <Home />
        <Icon />
        <Services />
        <About />
        <Doctors />
        <Book />
        <Review />
        <Footer /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
