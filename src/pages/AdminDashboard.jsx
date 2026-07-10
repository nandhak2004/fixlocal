import React from "react";
import {
  FaUsers,
  FaUserCheck,
  FaClipboardList,
  FaClock,
  FaTools,
  FaUserShield,
  FaCalendarCheck,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import "../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const stats = [
    {
      title: "Customers",
      value: "150",
      icon: <FaUsers />
    },
    {
      title: "Providers",
      value: "42",
      icon: <FaUserCheck />
    },
    {
      title: "Pending Approval",
      value: "8",
      icon: <FaClock />
    },
    {
      title: "Bookings",
      value: "320",
      icon: <FaClipboardList />
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <div className="sidebar-logo">
          <h2>FixLocal</h2>
          <span>Admin Panel</span>
        </div>

        <nav className="sidebar-menu">

          <button className="menu-btn active">
            <FaUserShield />
            Dashboard
          </button>

          <button
            className="menu-btn"
            onClick={() => navigate('/service-management')}
          >
            <FaTools />
            Service Management
          </button>

          <button className="menu-btn" onClick={() => navigate("/provider-management")}>
            <FaUsers />
            Provider Management
          </button>

          <button className="menu-btn" onClick={() => navigate("/booking-management")}>
            <FaCalendarCheck />
            Bookings
          </button>
          <button className="menu-btn" onClick={() => navigate("/customer-management")}>
            <FaUsers />
            Customer Management
          </button>

          <button className="menu-btn" onClick={()=> navigate("/admin-setting")}>
            <FaCog />
            Settings
          </button>

        </nav>

        <button className="logout-btn-admin">
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* MAIN */}

      <main className="admin-main">

        <div className="dashboard-header">

          <div>
            <h1>Dashboard Overview</h1>
            <p>
              Welcome back Admin
            </p>
          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <div>
                <h2>{item.value}</h2>
                <p>{item.title}</p>
              </div>

            </div>

          ))}

        </div>

        {/* RECENT ACTIVITY */}

        <div className="activity-section">

          <h2>
            Recent Activity
          </h2>

          <div className="activity-list">

            <div className="activity-item">
              ✅ Arun Kumar registered as provider
            </div>

            <div className="activity-item">
              ✅ Sathish Raj approved
            </div>

            <div className="activity-item">
              📅 New booking created
            </div>

            <div className="activity-item">
              ⚠ Provider account flagged
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;