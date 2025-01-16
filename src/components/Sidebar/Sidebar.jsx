import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css"; // Import CSS Module
import { useAuth } from "../../store/auth-context";

function SideBar() {
  const { authState } = useAuth();
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility
  };

  if (authState.isLoggedIn) {
    return (
      <div>
        {/* Sidebar itself */}
        <div className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.sidebarHeader}>
            <img src="src/assets/user.png" alt="Logo" className={styles.sidebarLogo} />
            <h2 className={styles.h2}>Welcome to KCloud</h2>
            <p>{authState.company_username}</p>
          </div>

          <ul className={styles.sidebarLinks}>
            <li>
              <Link to="/" className={styles.sidebarLink}>Home</Link>
            </li>
            <li>
              <Link to="/profile" className={styles.sidebarLink}>Profile</Link>
            </li>
            <li>
              <Link to="/groups" className={styles.sidebarLink}>Groups</Link>
            </li>
            <li>
              <Link to="/devices" className={styles.sidebarLink}>Devices</Link>
            </li>
          </ul>
        </div>

        {/* Arrow Button to toggle sidebar visibility */}
        <div
          className={`${styles.toggleArrow} ${isSidebarVisible ? styles.arrowLeft : styles.arrowRight}`}
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? '←' : '→'} {/* Arrow symbols */}
        </div>
      </div>
    );
  }

  return null;
}

export default SideBar;
