import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./About.css";

function About() {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <div className="center-box">
                    <h1>About KCloud</h1>
                    <h2>Your Gateway to an Open IoT World</h2>
                    <p>
                        KCloud is an open-source IoT cloud platform designed to empower developers, engineers, and businesses 
                        with a robust and scalable solution for managing IoT devices. Built using the power of <span className="highlight">Go</span>, 
                        KCloud brings unparalleled performance and efficiency to your IoT ecosystem.
                    </p>
                    <p>
                        Whether you're connecting smart devices, analyzing data streams, or automating operations, KCloud 
                        provides the tools and flexibility needed to innovate. Join our growing community and contribute to 
                        shaping the future of IoT technology.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
