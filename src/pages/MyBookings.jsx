import React from 'react'
import '../styles/MyBookings.css';
import { FaCommentDots, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import bookings from '../data/mybookingdata';
import { useNavigate } from 'react-router-dom';

function MyBookings() {

  const navigate=useNavigate();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed': return <FaCheckCircle />;
      case 'Pending': return <span>⏳</span>;
      case 'Cancelled': return <FaTimesCircle style={{ color: '#ff4d4d' }} />;
      case 'Complete':
        return <FaCheckCircle />;
      default: return <span>📋</span>;
    }
  };

  return (
    <div>

      <div className="bookings-page">
        <h2 className="page-title">My Service Bookings</h2>
        {/* left */}
        <div className="bookings-list">

          {bookings.length > 0 ? (
            bookings.map((book) => (
              <div className="booking-ticket" key={book.id}>

                {/* left */}
                <div className="ticket-left">
                  <img
                    src={book.photo || "/default-dp.png"}
                    alt={book.provider}
                    className="provider-thumb"
                  />

                  <div className='left-right'>
                    <span className="ticket-id">{book.id}</span>
                    <h3>{book.provider}</h3>
                    <p className="service-type">{book.service}</p>
                  </div>
                </div>

                {/* center */}
                <div className="ticket-middle">
                  <FaClock className="icon" />

                  <div className="info-row">
                    <span>{book.date} at {book.time}</span>
                  </div>

                  <div className={`status-badge ${book.status ? book.status.toLowerCase() : 'confirmed'}`}>
                    {getStatusIcon(book.status || 'Confirmed')} {book.status || 'Confirmed'}
                  </div>
                </div>

                {/* right */}
                <div className="ticket-right">


                  <button className="view-status-btn">
                    Track Expert
                  </button>

                  <button
                    className="cancel-booking-btn"
                    onClick={() =>
                      navigate(`/cancelbooking/${book.id}`)
                    }
                  >
                    Cancel Booking
                  </button>
                </div>

                <div className="ticket-cut-top"></div>
                <div className="ticket-cut-bottom"></div>

              </div>
            ))
          ) : (
            <div className="no-bookings">
              <h3>No Bookings Yet</h3>
              <p>Your booked services will appear here.</p>
            </div>
          )}

        </div>
      </div>


    </div>
  )
}

export default MyBookings
