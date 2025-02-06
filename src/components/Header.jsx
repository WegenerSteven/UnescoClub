// import React from "react";
import '../styles/Header.css';
//import { Link } from "react-router-dom";
import UnescoLogo from '../assets/img/UNESCO Logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src= {UnescoLogo} alt="UNESCO log" /></a>
      <div className="search" id="search">
        <input type="search" placeholder="Search here... " id="search-box" />
      </div>
      <nav className="navbar">
      <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className='bx bx-menu' id="menu-btn"></div>
    </header>
  );
};

export default Header;
