import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Docs from '../pages/Docs/Docs.jsx';
import Login from '../pages/LoginSignup/Login.jsx';
import { SignUp } from '../pages/LoginSignup/Signup.jsx';
import DeviceForm from '../pages/Forms/devices/device.jsx';
import GroupForm from '../pages/Forms/group/group.jsx';

function AppRoutes() {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>}/>
         <Route path="/docs" element={<Docs/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/groups" element={<GroupForm/>}/>
         <Route path="/devices" element={<DeviceForm/>}/>
      </Routes>
    );
}

export default AppRoutes
