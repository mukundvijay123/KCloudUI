import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth-context";

function Navbar(){
  const {authState,login,logout}=useAuth();

  if(authState.isLoggedIn===false){
    return (
      <div className="horizontal-navbar">
        <div className="navbar-section navbar-logo">
          <Link to="/" className="navbar-link">
          <img src="src/assets/logo.png" alt="MyApp Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-section navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/docs" className="navbar-link">Docs</Link>
        </div>
        <div className="navbar-section navbar-actions">
          <Link to="/login" className="navbar-button">Log In</Link>
          <Link to="/signup" className="navbar-button navbar-button-primary">Sign Up</Link>
        </div>
      </div>
    );
  }else if(authState.isLoggedIn===true){
    return(
      <div className="horizontal-navbar">
        <div className="navbar-section navbar-logo">
          <Link to="/" className="navbar-link">
          <img src="src/assets/logo.png" alt="MyApp Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-section navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/docs" className="navbar-link">Docs</Link>
        </div>
        <div className="navbar-section navbar-actions">
          
          <button onClick={logout} className="navbar-button navbar-button-logout">Logout</button>
        </div>
      </div>
    )
  }
};

export default Navbar;
