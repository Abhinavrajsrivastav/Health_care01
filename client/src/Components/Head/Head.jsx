import React, { useEffect, useState } from "react";
import "./Head.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Sukoon
      </a>

      <nav className="navbar">
        <a href="/">home</a>
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#doctors">doctors</a>
        <Link to="/profile">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="User Avatar"
              className="h-12 w-12 rounded-full "
              onclick={toggleDarkMode}
            />
          ) : (
            <span className="text-1.7rem hover:text-green-400">Sign in</span>
          )}
        </Link>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};

export default Header;
