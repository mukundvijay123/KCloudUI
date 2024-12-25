import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className="center-box">
          <h1>Welcome to <span className="green-text">KCloud</span>!!</h1>
          <h2>An opensource IoT Cloud written in Go Lang</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
