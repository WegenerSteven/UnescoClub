import { useState } from "react";
import "../styles/Header.css";
//import { Link } from "react-router-dom";
import UnescoLogo from "../assets/img/UNESCO Logo.jpeg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const sections = ["home", "about", "events", "contact"];
    const section = sections.find((sec) =>
      sec.includes(searchTerm.toLowerCase())
    );

    if (section) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Section not found");
    }
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={UnescoLogo} alt="UNESCO log" />
      </a>
      <div className="search" id="search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search here... "
            id="search-box"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="bx bx-menu" id="menu-btn"></div>
    </header>
  );
};

export default Header;
