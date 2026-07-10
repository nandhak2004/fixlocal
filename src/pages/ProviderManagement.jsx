import React, { useState } from "react";

import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaBan,
  FaUndo,
  FaEye
} from "react-icons/fa";

import "../styles/ProviderManagement.css";

function ProviderManagement() {

  const [providers, setProviders] = useState([

    {
      id: 1,
      name: "Ravi Kumar",
      category: "Plumbing",
      experience: "5 Years",
      status: "Pending",
      aadhar: "./aadhar-demo.jpg",
      photo: "./default-dp.png",
      skills: ["Pipe Repair", "Motor Fitting"],
      bio: "Professional Plumbing Expert"
    },

    {
      id: 2,
      name: "Arun",
      category: "Electrician",
      experience: "3 Years",
      status: "Approved",
      aadhar: "./aadhar-demo.jpg",
      photo: "./default-dp.png",
      skills: ["Wiring", "Switch Board"],
      bio: "Electrical Service Expert"
    },

    {
      id: 3,
      name: "Suresh",
      category: "Painting",
      experience: "7 Years",
      status: "Banned",
      aadhar: "./aadhar-demo.jpg",
      photo: "./default-dp.png",
      skills: ["Interior", "Exterior"],
      bio: "House Painting Specialist"
    }

  ]);

  const [search, setSearch] = useState("");

  const [selectedProvider, setSelectedProvider] =
    useState(null);

  const [showProfilePopup, setShowProfilePopup] =
    useState(false);

  const filteredProviders = providers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  function handleApprove(id) {

    setProviders(

      providers.map((item) =>

        item.id === id

          ? {
              ...item,
              status: "Approved"
            }

          : item

      )

    );

  }

  function handleReject(id) {

    setProviders(

      providers.filter(

        (item) => item.id !== id

      )

    );

  }

  function handleBan(id) {

    setProviders(

      providers.map((item) =>

        item.id === id

          ? {
              ...item,
              status: "Banned"
            }

          : item

      )

    );

  }

  function handleUnban(id) {

    setProviders(

      providers.map((item) =>

        item.id === id

          ? {
              ...item,
              status: "Approved"
            }

          : item

      )

    );

  }

  function handleView(provider) {

    setSelectedProvider(provider);

    setShowProfilePopup(true);

  }

  return (

    <div className="pm-management">

      <div className="pm-header">

        <div>

          <h1>

            Provider Management

          </h1>

          <p>

            Manage all service providers

          </p>

        </div>

      </div>

      <div className="pm-search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Provider..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="pm-table">

        <div className="pm-table-head">

          <span>Provider</span>

          <span>Category</span>

          <span>Status</span>

          <span>Actions</span>

        </div>

        {filteredProviders.map((provider) => (

          <div
            className="pm-table-row"
            key={provider.id}
          >

            <div className="pm-provider-info">

              <img
                src={provider.photo}
                alt=""
                className="pm-provider-photo"
              />

              <div>

                <h4>

                  {provider.name}

                </h4>

                <p>

                  {provider.experience}

                </p>

              </div>

            </div>

            <span>

              {provider.category}

            </span>

            <span>

              {provider.status}

            </span>

            <div className="pm-actions">
                              <button
                className="pm-view-btn"
                onClick={() => handleView(provider)}
              >
                <FaEye />
              </button>

              {provider.status === "Pending" && (
                <>
                  <button
                    className="pm-approve-btn"
                    onClick={() => handleApprove(provider.id)}
                  >
                    <FaCheckCircle />
                  </button>

                  <button
                    className="pm-reject-btn"
                    onClick={() => handleReject(provider.id)}
                  >
                    <FaTimesCircle />
                  </button>
                </>
              )}

              {provider.status === "Approved" && (
                <button
                  className="pm-ban-btn"
                  onClick={() => handleBan(provider.id)}
                >
                  <FaBan />
                </button>
              )}

              {provider.status === "Banned" && (
                <button
                  className="pm-unban-btn"
                  onClick={() => handleUnban(provider.id)}
                >
                  <FaUndo />
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

      {/* PROFILE POPUP */}

      {showProfilePopup && selectedProvider && (

        <div className="pm-popup-overlay">

          <div className="pm-popup-box">

            <div className="pm-popup-top">

              <img
                src={selectedProvider.photo}
                alt=""
                className="pm-popup-photo"
              />

              <div>

                <h2>
                  {selectedProvider.name}
                </h2>

                <p>
                  {selectedProvider.category}
                </p>

              </div>

            </div>

            <div className="pm-popup-details">

              <p>

                <strong>Experience :</strong>

                {" "}

                {selectedProvider.experience}

              </p>

              <p>

                <strong>Status :</strong>

                {" "}

                {selectedProvider.status}

              </p>

              <p>

                <strong>Bio :</strong>

                {" "}

                {selectedProvider.bio}

              </p>

              <div className="pm-skills">

                <strong>Skills</strong>

                <div className="pm-skill-list">

                  {selectedProvider.skills.map(
                    (skill, index) => (

                      <span
                        key={index}
                        className="pm-skill-chip"
                      >
                        {skill}
                      </span>

                    )
                  )}

                </div>

              </div>

              <div className="pm-aadhar-box">

                <strong>Aadhaar Photo</strong>

                <img
                  src={selectedProvider.aadhar}
                  alt="Aadhaar"
                  className="pm-aadhar-image"
                />

              </div>

            </div>

            <button
              className="pm-close-btn"
              onClick={() =>
                setShowProfilePopup(false)
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

export default ProviderManagement;
            
            