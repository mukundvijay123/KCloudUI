import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="horizontal-navbar">
      <div className="navbar-section navbar-logo">
        <Link to="/" className="navbar-link">
        <img src="src/assets/logo.png" alt="MyApp Logo" className="navbar-logo-img" />
        </Link>
      </div>
      <div className="navbar-section navbar-links">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/services" className="navbar-link">Services</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
      <div className="navbar-section navbar-actions">
        <Link to="/signin" className="navbar-button">Sign In</Link>
        <Link to="/signup" className="navbar-button navbar-button-primary">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
