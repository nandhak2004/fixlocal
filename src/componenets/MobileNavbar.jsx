import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaTools,
  FaCalendarAlt,
  FaUser,
  FaSignInAlt
} from "react-icons/fa";

import "../styles/mobilenavbar.css";

function MobileNavbar() {

  return (

    <div className="mobile-navbar">

      <Link to="/" className="mobile-nav-item">
        <FaHome />
        <span>Home</span>
      </Link>

      <Link to="/services" className="mobile-nav-item">
        <FaTools />
        <span>Services</span>
      </Link>

      <Link to="/mybooking" className="mobile-nav-item">
        <FaCalendarAlt />
        <span>Booking</span>
      </Link>

      <Link to="/account" className="mobile-nav-item">
        <FaUser />
        <span>Account</span>
      </Link>

      <Link to="/customerlogin" className="mobile-nav-item">
        <FaSignInAlt />
        <span>Login</span>
      </Link>

    </div>

  );

}

export default MobileNavbar;