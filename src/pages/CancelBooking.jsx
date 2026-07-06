import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bookings from "../data/mybookingdata";
import "../styles/cancelbooking.css";

function CancelBooking() {

  const { id } = useParams();

  const navigate = useNavigate();

  const booking = bookings.find(
    item => item.id === id
  );

  const [reason, setReason] = useState("");

  const [details, setDetails] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!booking) {

    return (
      <div className="cancel-page">
        <h2>Booking Not Found</h2>
      </div>
    );

  }

  function handleCancel() {

    if (!reason) {

      alert("Please select a reason");

      return;

    }

    alert(
      `Booking ${booking.id} Cancelled Successfully`
    );

    navigate("/mybooking");

  }

  return (

    <div className="cancel-page">

      <div className="cancel-card">

        <div className="booking-preview">

          <img
            src={booking.photo}
            alt=""
            className="provider-img"
          />

          <div>

            <h3>{booking.provider}</h3>

            <p>{booking.service}</p>

            <span>
              Booking ID : {booking.id}
            </span>

          </div>

        </div>

        <h1>Cancel Booking</h1>

        <p className="cancel-subtitle">
          Please tell us why you want to cancel this booking.
        </p>

        <div className="warning-box">
          ⚠ This action cannot be undone.
        </div>

        <label>
          Select Reason
        </label>

        <select
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
        >
          <option value="">
            Select Reason
          </option>

          <option value="Found another provider">
            Found another provider
          </option>

          <option value="Booked by mistake">
            Booked by mistake
          </option>

          <option value="Timing issue">
            Timing issue
          </option>

          <option value="Service no longer needed">
            Service no longer needed
          </option>

          <option value="Other">
            Other
          </option>

        </select>

        <label>
          Additional Details
        </label>

        <textarea
          rows="5"
          placeholder="Enter additional details..."
          value={details}
          onChange={(e) =>
            setDetails(e.target.value)
          }
        />

        {/* <button
          className="cancel-btn"
          onClick={handleCancel}
        >
          Confirm Cancel Booking
        </button> */}
        <button
          className="cancel-btn"
          onClick={() => setShowPopup(true)}
        >
          Confirm Cancel Booking
        </button>

      </div>
      {showPopup && (

        <div className="popup-overlay">

          <div className="popup-card">

            <h2>
              Cancel Booking?
            </h2>

            <p>
              Are you sure you want to
              cancel this booking?
            </p>

            <div className="popup-buttons">

              <button
                className="keep-btn"
                onClick={() =>
                  setShowPopup(false)
                }
              >
                Keep Booking
              </button>

              <button
                className="confirm-popup-btn"
                onClick={handleCancel}
              >
                Yes, Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default CancelBooking;