import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Docs.css";

function Docs() {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <div className="center-box">
                    <h1>Documentation</h1>
                    <h2>Explore and Contribute</h2>
                    <p>
                        Welcome to the documentation section of <strong>KCloud</strong>. Here, you'll find all the details you need 
                        to get started, contribute, and explore the features of this open-source IoT platform.
                    </p>
                    <p>
                        You can access the full project repository on GitHub using the link below:
                    </p>
                    <a
                        href="https://github.com/your-repo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Visit GitHub Repository
                    </a>
                </div>
            </div>
        </>
    );
}

export default Docs;
