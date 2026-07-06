// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   FaUserCircle,
//   FaBriefcase,
//   FaSignOutAlt,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaBell,
//   FaShieldAlt,
//   FaQuestionCircle,
//   FaInfoCircle,
//   FaChevronRight
// } from 'react-icons/fa';

// import '../styles/Account.css'; // Unga design css path


// function Account() {
//   const navigate = useNavigate();
//   const staticCustomer = {
//     id: "CUST-DUMMY-999",
//     name: "Nandhakumar E",
//     email: "nandhakumar@gmail.com",
//     phone: "+91 98765 43210",
//     address: "123, Anna Nagar Main Street, Chennai"
//   };


//   // const isProvider = true;
//   function handleserviceman() {
//     navigate('/providerregister')
//   }
//   function handleLogout() {
//     // Straight static redirect to Home page template layout grid
//     navigate('/');
//   }
//   return (
//     <div className="account-wrapper">

//       {/* Profile Card */}

//       <div className="account-hero">

//         <FaUserCircle className="hero-avatar" />

//         <h2>{staticCustomer.name}</h2>

//         <p>{staticCustomer.email}</p>

//         <span className="customer-badge">
//           Active Customer
//         </span>

//       </div>

//       {/* Stats */}

//       <div className="stats-container">

//         <div className="stat-box">
//           <h3>12</h3>
//           <span>Bookings</span>
//         </div>

//         <div className="stat-box">
//           <h3>3</h3>
//           <span>Notifications</span>
//         </div>

//         <div className="stat-box">
//           <h3>4.9</h3>
//           <span>Rating</span>
//         </div>

//       </div>

//       {/* Quick Actions */}

//       <h3 className="section-title">
//         Quick Actions
//       </h3>

//       <div className="quick-actions">

//         <button
//           className="quick-card"
//           onClick={handleserviceman}
//         >
//           <FaBriefcase />
//           <span>Become Provider</span>
//         </button>

//         <button
//           className="quick-card"
//           onClick={() =>
//             navigate("/providerdasbord")
//           }
//         >
//           <FaBriefcase />
//           <span>Dashboard</span>
//         </button>

//       </div>

//       {/* Account Menu */}

//       <h3 className="section-title">
//         Account
//       </h3>

//       <div className="account-menu">

//         <button className="menu-row">
//           <FaEdit />
//           <span>Edit Profile</span>
//           <FaChevronRight />
//         </button>

//         <button className="menu-row">
//           <FaMapMarkerAlt />
//           <span>My Address</span>
//           <FaChevronRight />
//         </button>

//         <button className="menu-row">
//           <FaBell />
//           <span>Notifications</span>

//           <div className="right-side">

//             <span className="notification-count">
//               3
//             </span>

//             <FaChevronRight />

//           </div>

//         </button>

//         <button className="menu-row">
//           <FaShieldAlt />
//           <span>Privacy & Security</span>
//           <FaChevronRight />
//         </button>

//         <button className="menu-row">
//           <FaQuestionCircle />
//           <span>Help & Support</span>
//           <FaChevronRight />
//         </button>

//         <button className="menu-row">
//           <FaInfoCircle />
//           <span>About App</span>
//           <FaChevronRight />
//         </button>

//       </div>

//       {/* Logout */}

//       <button
//         className="logout-premium-btn"
//         onClick={handleLogout}
//       >
//         <FaSignOutAlt />
//         Logout
//       </button>

//       <div className="version-text">
//         Fixly v1.0.0
//       </div>

//     </div>
//   );
// }

// export default Account;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBriefcase,
  FaSignOutAlt,
  FaEdit,
  FaBell,
  FaQuestionCircle,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import "../styles/Account.css";

function Account() {
  const navigate = useNavigate();

  const staticCustomer = {
    id: "CUST-DUMMY-999",
    name: "Nandhakumar E",
    email: "nandhakumar@gmail.com",
    phone: "+91 98765 43210"
  };

  function handleServiceMan() {
    navigate("/providerregister");
  }

  function handleDashboard() {
    navigate("/providerdasbord");
  }

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="account-page">

      {/* Header */}

      <div className="account-header">

        {/* <div className="header-overlay"></div> */}

        <div className="profile-avatar">
          <FaUserCircle />
        </div>

        <h2>{staticCustomer.name}</h2>

        <span className="customer-id">
          {staticCustomer.id}
        </span>

      </div>

   
      {/* Contact */}

      <div className="contact-section">

        <div className="contact-item">
          <FaEnvelope />
          <span>{staticCustomer.email}</span>
        </div>

        <div className="contact-item">
          <FaPhoneAlt />
          <span>{staticCustomer.phone}</span>
        </div>

      </div>

      {/* Quick Actions */}

      <h3 className="section-title">
        Quick Actions
      </h3>

      <div className="quick-actions">

        <button
          className="action-card provider-card"
          onClick={handleServiceMan}
        >
          <FaBriefcase />
          <span>
            Become Provider
          </span>
        </button>

        <button
          className="action-card dashboard-card"
          onClick={handleDashboard}
        >
          <FaBriefcase />
          <span>
            Dashboard
          </span>
        </button>

      </div>

      {/* Settings */}

      <h3 className="sectin-title">
        Account
      </h3>

      <div className="settings-list">

        <button className="setting-item">

          <div className="setting-left">
            <FaEdit />
            <span>Edit Profile</span>
          </div>

          <FaChevronRight />
        </button>

        <button className="setting-item">

          <div className="setting-left">

            <FaBell />

            <span>
              Notifications
            </span>

            <div className="notification-badge">
              3
            </div>

          </div>

          <FaChevronRight />

        </button>

        <button className="setting-item">

          <div className="setting-left">
            <FaQuestionCircle />
            <span>Help & Support</span>
          </div>

          <FaChevronRight />

        </button>

      </div>

      {/* Logout */}

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

      <div className="app-version">
        Fixly v1.0.0
      </div>

    </div>
  );
}

export default Account;