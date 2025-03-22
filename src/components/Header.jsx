import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
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
      <Link to="/" className="logo">
        <img src={UnescoLogo} alt="UNESCO logo" />
      </Link>
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/member-portal" target="_blank">Member Portal</Link>
      </nav>
      <div className="bx bx-menu" id="menu-btn"></div>
    </header>
  );
};

export default Header;