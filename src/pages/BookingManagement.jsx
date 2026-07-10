import React, { useState } from "react";

import {
    FaSearch,
    FaEye
} from "react-icons/fa";

import "../styles/BookingManagement.css";

function BookingManagement() {

    const [bookings] = useState([

        {
            id: "BK1001",
            customer: "Karthik",
            provider: "Ravi Kumar",
            service: "Plumbing",
            date: "15 Jul 2026",
            time: "10:30 AM",
            amount: 500,
            payment: "Paid",
            status: "Pending",
            address: "Theni"
        },

        {
            id: "BK1002",
            customer: "Arun",
            provider: "Suresh",
            service: "Painting",
            date: "16 Jul 2026",
            time: "02:00 PM",
            amount: 3500,
            payment: "Pending",
            status: "Accepted",
            address: "Madurai"
        },

        {
            id: "BK1003",
            customer: "Naveen",
            provider: "Prakash",
            service: "Electrician",
            date: "17 Jul 2026",
            time: "09:00 AM",
            amount: 1200,
            payment: "Paid",
            status: "Completed",
            address: "Dindigul"
        }

    ]);

    const [search, setSearch] = useState("");

    const [selectedBooking, setSelectedBooking] =
        useState(null);

    const [showPopup, setShowPopup] =
        useState(false);

    const filteredBookings = bookings.filter((item) =>

        item.customer
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        item.provider
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        item.service
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        item.id
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    function handleView(booking) {

        setSelectedBooking(booking);

        setShowPopup(true);

    }
    return (

        <div className="bm-management">

            {/* HEADER */}

            <div className="bm-header">

                <div>

                    <h1>Booking Management</h1>

                    <p>Monitor all customer bookings</p>

                </div>

            </div>

            {/* SEARCH */}

            <div className="bm-search-box">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search Booking..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            {/* TABLE */}

            <div className="bm-table">

                <div className="bm-table-head">

                    <span>Booking ID</span>

                    <span>Customer</span>

                    <span>Provider</span>

                    <span>Service</span>

                    <span>Status</span>

                    <span>Actions</span>

                </div>

                {filteredBookings.map((booking) => (

                    <div
                        className="bm-table-row"
                        key={booking.id}
                    >

                        <span>{booking.id}</span>

                        <span>{booking.customer}</span>

                        <span>{booking.provider}</span>

                        <span>{booking.service}</span>

                        <span>

                            <span
                                className={`bm-status ${booking.status.toLowerCase()}`}
                            >
                                {booking.status}
                            </span>

                        </span>

                        <div className="bm-actions">

                            <button
                                className="bm-view-btn"
                                onClick={() => handleView(booking)}
                            >

                                <FaEye />

                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* POPUP */}

            {showPopup && selectedBooking && (

                <div className="bm-popup-overlay">

                    <div className="bm-popup-box">

                        <h2>Booking Details</h2>

                        <div className="bm-popup-details">

                            <p>

                                <strong>Booking ID :</strong>

                                {selectedBooking.id}

                            </p>

                            <p>

                                <strong>Customer :</strong>

                                {selectedBooking.customer}

                            </p>

                            <p>

                                <strong>Provider :</strong>

                                {selectedBooking.provider}

                            </p>

                            <p>

                                <strong>Service :</strong>

                                {selectedBooking.service}

                            </p>

                            <p>

                                <strong>Date :</strong>

                                {selectedBooking.date}

                            </p>

                            <p>

                                <strong>Time :</strong>

                                {selectedBooking.time}

                            </p>

                            <p>

                                <strong>Amount :</strong>

                                ₹{selectedBooking.amount}

                            </p>

                            <p>

                                <strong>Payment :</strong>

                                {selectedBooking.payment}

                            </p>

                            <p>

                                <strong>Status :</strong>

                                {selectedBooking.status}

                            </p>

                            <p>

                                <strong>Address :</strong>

                                {selectedBooking.address}

                            </p>

                        </div>

                        <button
                            className="bm-close-btn"
                            onClick={() => setShowPopup(false)}
                        >

                            Close

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}

export default BookingManagement;