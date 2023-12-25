import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Head/Head";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import Quiz from "./Components/Services/Quiz/Quiz"; // Import the Quiz component

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/Quiz"
            element={<Quiz setShowApp={setShowApp} />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
