import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Docs from '../pages/Docs/Docs.jsx';
import Login from '../pages/LoginSignup/Login.jsx';
function AppRoutes() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>}/>
         <Route path="/docs" element={<Docs/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    );
}

export default AppRoutes
