import React from "react";
import { FaTools } from "react-icons/fa";
import "../styles/mobileheader.css";

function MobileHeader() {
  return (
    <div className="mobile-app-header">

      <div className="logo-wrap">

        <div className="logo-circle">
          <FaTools />
        </div>

        <div>
          <h2>FixLocal</h2>
          <span>Trusted Local Services</span>
        </div>

      </div>

    </div>
  );
}

export default MobileHeader;