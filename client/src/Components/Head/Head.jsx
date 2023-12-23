import React, { useEffect, useState } from "react";
import "./Head.css";

import { Link, useNavigate } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Sukoon
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a
          href="https://www.kibagames.com/Mini-Games"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fun games
        </a>
        <Link to="/profile">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="User Avatar"
              className="h-8 w-8 rounded-full "
            />
          ) : (
            <span className=" text-1.7rem hover:text-green-400">Sign in</span>
          )}
        </Link>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};

export default Header;
