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
      <button className="hamburger-menu" onClick={() => setShowMenu(true)}>
        <span className={`hamburger-line `}></span>
        <span className={`hamburger-line `}></span>
        <span className={`hamburger-line `}></span>
      </button>

      <div className={showMenu ? "sidebar" : "close"}>
        <div className="logo-details">
          <span className="logo_name">Logo</span>
          <span onClick={() => setShowMenu(false)}>
            <box-icon rotate="90" color="#00eeff" name="x"></box-icon>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <i className="bx bx-home"></i>
            <Link className="link_name">Home</Link>

            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Home
                </a>
              </li>
            </ul>
          </li>
          <li>
            <box-icon type="solid" name="image"></box-icon>
            <Link to="/gallery" className="link_name">
              Gallery
            </Link>
          </li>
          <li>
            <box-icon name="notepad"></box-icon>
            <Link to="/ServicesAndPricingPage" className="link_name">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link_name">
              Blog
            </Link>
          </li>
          <li className="">
            <Link to="/about" className="link_name">
              About
            </Link>
          </li>
          <li className="">
            <Link to="/team" className="link_name">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link_name">
              Contact
            </Link>
          </li>
          <li>
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

      {/* <div className={`navbar-container ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ServicesAndPricingPage"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/team"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin_login"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
