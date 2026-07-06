import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Booking.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import serviceMan from '../data/profilecard';


function Booking() {
  const { id } = useParams();
  const  provider = serviceMan.find(b => b.id === Number(id));
  if (! provider) {
  return (
    <div className="not-found">
      Service Expert Not Found
    </div>
  );
}

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const handleConfirm = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const navigate = useNavigate();
  function handlehome() {
    navigate('/')
  }
  function handlemybooking() {
    navigate('/mybooking')
  }

  return (
    <div className="booking-page">
      <div className="booking-container">

        <div className="booking-form-section">
          <h2><FaCalendarAlt /> Schedule Your Service</h2>
          <form onSubmit={handleConfirm}>
            <div className="form-grid">
              <div className="input-box">
                <label><FaUser /> Full Name</label>
                <input type="text"
                  placeholder="Enter your name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  required
                />
              </div>
              <div className="input-box">
                <label><FaPhoneAlt /> Phone Number</label>
                <input type="tel"
                  placeholder="+91 00000 00000"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  required />
              </div>
              <div className="input-box">
                <label>Service Date</label>
                <input type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  required />
              </div>
              <div className="input-box">
                <label>Preferred Time</label>
                <input type="time"
                  value={bookingData.time}
                  onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                  required />
              </div>
            </div>

            <div className="input-box full-width">
              <label><FaMapMarkerAlt /> Service Location / Address</label>
              <textarea placeholder="Flat No, Building Name, Street..." value={bookingData.address} onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })} required></textarea>
            </div>

            <div className="map-placeholder">
              <p>📍 Select Location from Map </p>
              <div className="fake-map">
                Map Integration Coming Soon
              </div>
            </div>

            <div className="input-box full-width">
              <label>Describe Your Problem (Optional)</label>
              <textarea
                placeholder="e.g. My kitchen tap is leaking since morning, or Fan is making a loud noise..."
                rows="4" value={bookingData.notes} onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
              ></textarea>
              <p className="helper-text">This helps our expert bring the right tools for your work.</p>
            </div>
            <button type="submit" className="confirm-booking-btn">Confirm Booking</button>
          </form>
          {showPopup && (
            <div className="popup-overlay">
              <div className="success-popup animate-pop">
                <div className="success-icon-wrap">
                  <div className="tick-icon">✔</div>
                </div>

                <h2>Booking Successful!</h2>
                <p>Our expert <b>{ provider?.name}</b> has been notified and will contact you shortly at your provided address.</p>

                <div className="popup-buttons">
                  <button className="home-btn" onClick={handlehome}>
                    Back to Home
                  </button>
                  <button className="booking-status-btn" onClick={handlemybooking}>
                    View My Bookings
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>


        <div className="booking-summary-card">
          <h3>Booking Summary</h3>

          <div className="summary-expert-info">
            <div className="expert-avatar">
              <img src={provider?.photo} alt={provider?.name} />
            </div>
            <div className="expert-text">
              <strong>{provider?.name}</strong>
              <p>{provider?.category} Specialist</p>

              <span style={{ fontSize: '12px', color: '#ccc', display: 'block' }}>
                Reference ID: #FXL-00{id}
              </span>
            </div>
          </div>

          <hr />

          <ul className="trust-points">
            <li>✅ No Visit Charges</li>
            <li>✅ 30-Day Service Warranty</li>
            <li>✅ Verified Professional</li>
          </ul>

          <div className="safety-badge">
            🛡️ FixLocal Safety Assurance
          </div>
        </div>

      </div>
    </div>
  );
}

export default Booking;
