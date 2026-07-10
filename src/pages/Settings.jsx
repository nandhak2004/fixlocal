import React, { useState } from "react";

import "../styles/Settings.css";

function Settings() {

  const [settings, setSettings] = useState({

    adminName: "Naveen",

    email: "admin@fixlocal.com",

    phone: "9876543210",

    websiteName: "FixLocal",

    tagline: "Find Trusted Local Services",

    supportEmail: "support@fixlocal.com",

    supportPhone: "9876543210",

    bookingEnabled: true

  });

  function handleChange(e) {

    const { name, value } = e.target;

    setSettings({

      ...settings,

      [name]: value

    });

  }

  function handleBookingToggle() {

    setSettings({

      ...settings,

      bookingEnabled: !settings.bookingEnabled

    });

  }

  function handleSave() {

    alert("Settings Saved Successfully");

    // Backend வந்த பிறகு
    // PUT /api/settings

  }
    return (

    <div className="settings-page">

      <div className="settings-header">

        <h1>Settings</h1>

        <p>Manage platform settings</p>

      </div>

      <div className="settings-card">

        {/* ADMIN */}

        <h2>Admin Profile</h2>

        <input
          type="text"
          name="adminName"
          placeholder="Admin Name"
          value={settings.adminName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={settings.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={settings.phone}
          onChange={handleChange}
        />

        {/* WEBSITE */}

        <h2>Platform Settings</h2>

        <input
          type="text"
          name="websiteName"
          placeholder="Website Name"
          value={settings.websiteName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="tagline"
          placeholder="Website Tagline"
          value={settings.tagline}
          onChange={handleChange}
        />

        {/* SUPPORT */}

        <h2>Support Details</h2>

        <input
          type="email"
          name="supportEmail"
          placeholder="Support Email"
          value={settings.supportEmail}
          onChange={handleChange}
        />

        <input
          type="text"
          name="supportPhone"
          placeholder="Support Phone"
          value={settings.supportPhone}
          onChange={handleChange}
        />

        {/* BOOKING */}

        <h2>Booking Settings</h2>

        <label className="booking-toggle">

          <input
            type="checkbox"
            checked={settings.bookingEnabled}
            onChange={handleBookingToggle}
          />

          <span>
            Booking Enabled
          </span>

        </label>

        <button
          className="save-settings-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>

  );

}

export default Settings;