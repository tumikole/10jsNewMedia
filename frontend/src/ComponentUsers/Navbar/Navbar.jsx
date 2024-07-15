import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSubMenu = (e) => {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  };

  const toggleSidebar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <button style={{display: showMenu ? "none" : "block"}} className="hamburger-menu" onClick={() => setShowMenu(true)}>
        <span className={`hamburger-line `}></span>
        <span className={`hamburger-line `}></span>
        <span className={`hamburger-line `}></span>
      </button>

      <div className={showMenu ? "sidebar" : "close"}>
        <div className="logo-details">
          <span className="logo_name">Logo</span>
          <span onClick={() => setShowMenu(false)}>
            <box-icon rotate="90" size='lg' color="#00eeff" name="x"></box-icon>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>
            <Link className="link_name">Home</Link>
          </li>
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/gallery" className="link_name">
              Gallery
            </Link>
          </li>
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/ServicesAndPricingPage" className="link_name">
              Services
            </Link>
          </li>
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/blog" className="link_name">
              Blog
            </Link>
          </li>
          <li className="">
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/about" className="link_name">
              About
            </Link>
          </li>
          <li className="">
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/team" className="link_name">
              Our Team
            </Link>
          </li>
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/contact" className="link_name">
              Contact
            </Link>
          </li>
          <li>
            <div className="icon">
              <box-icon color='#00eeff' name="notepad"></box-icon>
            </div>            
            <Link to="/admin_login" className="link_name">
              Sign In
            </Link>
          </li>
        </ul>
        <div className="profile-details">
          <div className="name-job">
            <p className="profile_name">10JS MEDIA PRODUCTION</p>
            <p className="job">We make memories last forever</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
