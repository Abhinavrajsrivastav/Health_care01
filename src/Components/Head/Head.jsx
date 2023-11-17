import React from 'react';
import './Head.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Health Care.
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="https://www.kibagames.com/Mini-Games" target="_blank" rel="noopener noreferrer">
          Fun games
        </a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};

export default Header;
