import React, { useState } from "react";

import {
  FaSearch,
  FaEye,
  FaBan,
  FaUnlock
} from "react-icons/fa";

import "../styles/CustomerManagement.css";

function CustomerManagement() {

  const [customers, setCustomers] = useState([

    {
      id: 1,
      name: "Naveen",
      email: "naveen@gmail.com",
      phone: "9876543210",
      address: "Theni",
      joined: "10 Jul 2026",
      bookings: 12,
      completed: 10,
      cancelled: 2,
      amount: 5400,
      status: "Active",
      photo: "./default-dp.png"
    },

    {
      id: 2,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      phone: "9123456789",
      address: "Madurai",
      joined: "15 Jul 2026",
      bookings: 6,
      completed: 5,
      cancelled: 1,
      amount: 2200,
      status: "Blocked",
      photo: "./default-dp.png"
    },

    {
      id: 3,
      name: "Karthik",
      email: "karthik@gmail.com",
      phone: "9090909090",
      address: "Dindigul",
      joined: "20 Jul 2026",
      bookings: 20,
      completed: 18,
      cancelled: 2,
      amount: 9800,
      status: "Active",
      photo: "./default-dp.png"
    }

  ]);

  const [search, setSearch] = useState("");

  const [selectedCustomer, setSelectedCustomer] =
    useState(null);

  const [showPopup, setShowPopup] =
    useState(false);

  const filteredCustomers = customers.filter((item) =>

    item.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.email
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.phone
      .includes(search)

  );

  function handleView(customer) {

    setSelectedCustomer(customer);

    setShowPopup(true);

  }

  function handleBlock(id) {

    setCustomers(

      customers.map((item) =>

        item.id === id

          ? {
              ...item,
              status: "Blocked"
            }

          : item

      )

    );

  }

  function handleUnblock(id) {

    setCustomers(

      customers.map((item) =>

        item.id === id

          ? {
              ...item,
              status: "Active"
            }

          : item

      )

    );

  }
  return (

    <div className="cm-management">

      {/* HEADER */}

      <div className="cm-header">

        <div>

          <h1>Customer Management</h1>

          <p>Manage all registered customers</p>

        </div>

      </div>

      {/* SEARCH */}

      <div className="cm-search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* TABLE */}

      <div className="cm-table">

        <div className="cm-table-head">

          <span>Customer</span>

          <span>Phone</span>

          <span>Joined</span>

          <span>Status</span>

          <span>Actions</span>

        </div>

        {filteredCustomers.map((customer) => (

          <div
            className="cm-table-row"
            key={customer.id}
          >

            <div className="cm-customer-info">

              <img
                src={customer.photo}
                alt=""
                className="cm-customer-photo"
              />

              <div>

                <h4>{customer.name}</h4>

                <p>{customer.email}</p>

              </div>

            </div>

            <span>{customer.phone}</span>

            <span>{customer.joined}</span>

            <span>{customer.status}</span>

            <div className="cm-actions">

              <button
                className="cm-view-btn"
                onClick={() => handleView(customer)}
              >
                <FaEye />
              </button>

              {customer.status === "Active" ? (

                <button
                  className="cm-block-btn"
                  onClick={() => handleBlock(customer.id)}
                >
                  <FaBan />
                </button>

              ) : (

                <button
                  className="cm-unblock-btn"
                  onClick={() => handleUnblock(customer.id)}
                >
                  <FaUnlock />
                </button>

              )}

            </div>

          </div>

        ))}

      </div>

      {/* POPUP */}

      {showPopup && selectedCustomer && (

        <div className="cm-popup-overlay">

          <div className="cm-popup-box">

            <div className="cm-popup-top">

              <img
                src={selectedCustomer.photo}
                alt=""
                className="cm-popup-photo"
              />

              <div>

                <h2>{selectedCustomer.name}</h2>

                <p>{selectedCustomer.email}</p>

              </div>

            </div>

            <div className="cm-popup-details">

              <p>
                <strong>Phone :</strong>{" "}
                {selectedCustomer.phone}
              </p>

              <p>
                <strong>Address :</strong>{" "}
                {selectedCustomer.address}
              </p>

              <p>
                <strong>Joined :</strong>{" "}
                {selectedCustomer.joined}
              </p>

              <p>
                <strong>Total Bookings :</strong>{" "}
                {selectedCustomer.bookings}
              </p>

              <p>
                <strong>Completed :</strong>{" "}
                {selectedCustomer.completed}
              </p>

              <p>
                <strong>Cancelled :</strong>{" "}
                {selectedCustomer.cancelled}
              </p>

              <p>
                <strong>Total Amount :</strong> ₹
                {selectedCustomer.amount}
              </p>

              <p>
                <strong>Status :</strong>{" "}
                {selectedCustomer.status}
              </p>

            </div>

            <button
              className="cm-close-btn"
              onClick={() =>
                setShowPopup(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

export default CustomerManagement;