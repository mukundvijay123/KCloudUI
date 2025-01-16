import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SideBar from "../../components/Sidebar/Sidebar.jsx";
import {useAuth} from "../../store/auth-context.jsx"
import "./Home.css";

function Home() {
  const {authState}=useAuth();
  if(!authState.isLoggedIn){
    return (
      <div>
        <Navbar />
        <div className="main-content">
          <div className="center-box">
            <h1>Welcome to KCloud!!</h1>
            <h2>An opensource IoT Cloud written in Go Lang</h2>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div>
        <Navbar/>
        <SideBar/>
      </div>
    );
  }

}

export default Home;
