import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Head/Head";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import Quiz from "./Components/Services/Quiz/Quiz"; // Import the Quiz component
import Video from "./Components/Services/Videocall/Video"; // Import the Video component

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
