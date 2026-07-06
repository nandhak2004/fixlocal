import React, { useEffect, useState } from "react";

import {
  // FaUserCircle,
  FaCamera,
  FaVideo,
  FaTools,
  FaCheck,
  FaTimes,
  FaExternalLinkAlt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../styles/providerdashboard.css";
import serviceMan from "../data/profilecard";
import bookings from "../data/mybookingdata";

function ProviderDashboard() {

  const navigate = useNavigate();

  const [provider, setProvider] = useState(null);

  const [showSkillPopup, setShowSkillPopup] = useState(false);
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const [liveBookings, setLiveBookings] = useState([]);

  const [acceptedBookings, setAcceptedBookings] = useState([]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);


  useEffect(() => {

    const currentProvider = serviceMan[0];

    setProvider(currentProvider);

    const providerBookings = bookings
      .filter(
        (item) =>
          item.providerId === currentProvider.id
      )
      .map((item) => ({
        ...item,

        customerName:
          item.customerName || "Rahul Kumar",

        customerPhone:
          item.customerPhone || "9876543210",

        customerAddress:
          item.customerAddress ||
          "Anna Nagar, Chennai"
      }));

    setLiveBookings(
      providerBookings.filter(
        (item) =>
          item.status === "Confirmed"
      )
    );

    setAcceptedBookings(
      providerBookings.filter(
        (item) =>
          item.status === "Accepted" ||
          item.status === "Completed"
      )
    );

  }, []);
  function handleProfile() {

    if (!provider) return;

    navigate(`/profile/${provider.id}`);

  }

  function handleUpload(type) {

    if (type === "Skill") {
      setShowSkillPopup(true);
    }

    if (type === "Photo") {
      setShowPhotoPopup(true);
    }

    if (type === "Video") {
      setShowVideoPopup(true);
    }

  }
  function handlePhotoSelect(e) {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedPhoto(file);

  }
  function handlePhotoUpload() {

    if (!selectedPhoto) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setProvider({
        ...provider,
        posts: [
          ...(provider?.posts || []),
          {
            id: Date.now(),
            type: "image",
            url: reader.result,
            uploadDate: new Date().toLocaleDateString(),
            uploadTime: new Date().toLocaleTimeString()
          }
        ]
      });
      setSelectedPhoto(null);

      setShowPhotoPopup(false);

    };

    reader.readAsDataURL(selectedPhoto);

  }
  function handleVideoSelect(e) {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedVideo(file);

  }

  function handleVideoUpload() {

    if (!selectedVideo) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setProvider({
        ...provider,
        posts: [
          ...(provider?.posts || []),
          {
            id: Date.now(),
            type: "video",
            url: reader.result,
            uploadDate: new Date().toLocaleDateString(),
            uploadTime: new Date().toLocaleTimeString()
          }
        ]
      });

      setSelectedVideo(null);

      setShowVideoPopup(false);

    };

    reader.readAsDataURL(selectedVideo);

  }

  function handleAccept(id) {

    const acceptedBooking =
      liveBookings.find(
        (item) => item.id === id
      );

    setLiveBookings(
      liveBookings.filter(
        (item) => item.id !== id
      )
    );

    setAcceptedBookings([
      {
        ...acceptedBooking,
        status: "Accepted"
      },
      ...acceptedBookings
    ]);

  }

  function handleReject(id) {

    setLiveBookings(
      liveBookings.filter(
        (item) => item.id !== id
      )
    );

  }

  function handleStatusChange(id, statusValue) {

    setAcceptedBookings(
      acceptedBookings.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            status: statusValue
          };

        }

        return item;

      })
    );

  }
  function handleAddSkill() {

    if (!skillInput.trim()) return;

    setProvider({
      ...provider,
      skills: [
        ...provider.skills,
        skillInput
      ]
    });

    setSkillInput("");

    setShowSkillPopup(false);

  }
  function handleImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setProvider({
        ...provider,
        photo: reader.result
      });

    };

    reader.readAsDataURL(file);

  }

  function handleDeleteSkill(indexToDelete) {

    setProvider({
      ...provider,
      skills: provider.skills.filter(
        (_, index) => index !== indexToDelete
      )
    });

  }


  return (

    <div className="provider-dashboard">

      {/* TOP PROFILE */}

      <div className="dashboard-top-card">

        <div className="top-left">



          <label className="avatar-label">

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />

            {
              provider?.photo ? (
                <img
                  src={provider.photo}
                  alt=""
                  className="avatar-preview"
                />)
                : provider ? (
                  <img
                    src="/default-dp.png"
                    alt=""
                    className="avatar-preview"
                  />
                )

                  : (

                    <div className="avatar-placeholder">

                      <FaCamera />

                    </div>)
            }

          </label>

          {/* </div> */}
          <div className="provider-basic">

            <h2>
              {provider?.name || "Provider Name"}
            </h2>

            <p>
              {provider?.category || "Service Expert"}
            </p>

            <span className="post-count">
              Posts :
              {" "}
              {provider?.posts?.length || 0}
            </span>

          </div>

        </div>

        <div className="top-actions">

          <button
            className="public-btn"
            onClick={handleProfile}
          >
            <FaExternalLinkAlt />
            Public Profile
          </button>

          <button
            className="edit-profile-btn"
            onClick={() => setShowEditPopup(true)}
          >
            Edit Profile
          </button>

        </div>
      </div>

      {/* UPLOAD */}

      <div className="upload-section">

        <h3>
          Upload Center
        </h3>

        <div className="upload-grid">

          <div
            className="upload-card"
            onClick={() =>
              handleUpload("Skill")
            }
          >

            <FaTools className="upload-icon" />

            <p>Add Skill</p>

          </div>

          <div
            className="upload-card"
            onClick={() =>
              handleUpload("Photo")
            }
          >

            <FaCamera className="upload-icon" />

            <p>Upload Photo</p>

          </div>

          <div
            className="upload-card"
            onClick={() =>
              handleUpload("Video")
            }
          >

            <FaVideo className="upload-icon" />

            <p>Upload Video</p>

          </div>

        </div>

      </div>
      <button
        className="my-uploads-btn"
        onClick={() => navigate("/myuploads")}
      >
        Open My Uploads
      </button>

      {/* cheaking list  backend vantha delete pannanum

      <div className="skills-preview">

        <h3>My Skills</h3>

        <div className="skill-grid">

          {provider?.skills?.map((skill, index) => (

            <div className="skill-chip" key={index}>
              {skill}

              <span
                className="skill-delete"
                onClick={() => handleDeleteSkill(index)}
              >
                ×
              </span>
            </div>
          ))}

        </div>

      </div>
      <div className="uploads-preview">

        <h3>My Uploads</h3>

        <div className="posts-grid">

          {provider?.posts?.length > 0 ? (

            provider.posts.map((post) => (

              <div
                key={post.id}
                className="post-card"
              >

                {post.type === "image" ? (

                  <img
                    src={post.url}
                    alt=""
                  />

                ) : (

                  <video
                    src={post.url}
                    controls
                  />

                )}

              </div>

            ))

          ) : (

            <p>No Uploads Yet</p>

          )}

        </div>

      </div>

       LIVE BOOKINGS */}

      <div className="booking-wrapper">

        <div className="booking-box">

          <h3>
            Live Bookings
          </h3>

          {
            liveBookings.length === 0 ?

              <div className="empty-box">
                No Live Bookings
              </div>

              :

              liveBookings.map((item) => (

                <div
                  className="booking-card"
                  key={item.id}
                >

                  <div className="booking-user-details">

                    <h4>
                      {item.customerName}
                    </h4>

                    <p>
                      📞 {item.customerPhone}
                    </p>

                    <p>
                      📍 {item.customerAddress}
                    </p>

                    <span>
                      {item.service}
                    </span>

                  </div>

                  <div className="booking-actions">

                    <button
                      className="accept-btn"
                      onClick={() =>
                        handleAccept(item.id)
                      }
                    >
                      <FaCheck />
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        handleReject(item.id)
                      }
                    >
                      <FaTimes />
                    </button>

                  </div>

                </div>

              ))
          }

        </div>

        {/* ACCEPTED BOOKINGS */}

        <div className="booking-box">

          <h3>
            Accepted Bookings
          </h3>

          {
            acceptedBookings.length === 0 ?

              <div className="empty-box">
                No Accepted Bookings
              </div>

              :

              acceptedBookings.map((item) => (

                <div
                  className="booking-card accepted-card"
                  key={item.id}
                >

                  <div className="booking-user-details">

                    <h4>
                      {item.customerName}
                    </h4>

                    <p>
                      📞 {item.customerPhone}
                    </p>

                    <p>
                      📍 {item.customerAddress}
                    </p>

                    <span>
                      {item.service}
                    </span>

                  </div>

                  <div className="status-buttons">

                    <button
                      className={
                        item.status === "Accepted"
                          ? "pending-btn active"
                          : "pending-btn"
                      }
                      onClick={() =>
                        handleStatusChange(
                          item.id,
                          "Accepted"
                        )
                      }
                    >
                      Pending
                    </button>

                    <button
                      className={
                        item.status === "Completed"
                          ? "complete-btn active"
                          : "complete-btn"
                      }
                      onClick={() =>
                        handleStatusChange(
                          item.id,
                          "Completed"
                        )
                      }
                    >
                      Complete
                    </button>

                  </div>

                </div>

              ))
          }

        </div>

      </div>
      {
        showSkillPopup && (

          <div className="skill-popup">

            <div className="skill-popup-box">

              <h3>Add Skill</h3>

              <input
                type="text"
                placeholder="Enter Skill"
                value={skillInput}
                onChange={(e) =>
                  setSkillInput(e.target.value)
                }
              />
              <div className="skill-popup-buttons">

                <button onClick={handleAddSkill}>
                  Add
                </button>
                <button
                  onClick={() => setShowSkillPopup(false)}
                  className="close-skill-btn"
                >
                  Close
                </button>
              </div>

            </div>

          </div>

        )
      }
      {
        showPhotoPopup && (

          <div className="skill-popup">

            <div className="skill-popup-box">

              <h3>Upload Photo</h3>

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="file-input"
              />

              <div className="skill-popup-buttons">

                <button
                  className="add-btn"
                  onClick={handlePhotoUpload}
                >
                  Upload
                </button>

                <button
                  className="close-skill-btn"
                  onClick={() => setShowPhotoPopup(false)}
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )
      }

      {
        showVideoPopup && (

          <div className="skill-popup">

            <div className="skill-popup-box">

              <h3>Upload Video</h3>

              <input
                type="file"
                accept="video/*"
                onChange={handleVideoSelect}
                className="file-input"
              />

              <div className="skill-popup-buttons">

                <button
                  className="add-btn"
                  onClick={handleVideoUpload}
                >
                  Upload
                </button>

                <button
                  className="close-skill-btn"
                  onClick={() => setShowVideoPopup(false)}
                >
                  Close
                </button>

              </div>
            </div>

          </div>

        )
      }
      {
        showEditPopup && (

          <div className="skill-popup">

            <div className="skill-popup-box">

              <h3>Edit Profile</h3>

              <label>Name</label>
              <input
                type="text"
                value={provider?.name || ""}
                onChange={(e) =>
                  setProvider({
                    ...provider,
                    name: e.target.value
                  })
                }
              />

              <label>Experience</label>
              <input
                type="text"
                value={provider?.experience || ""}
                onChange={(e) =>
                  setProvider({
                    ...provider,
                    experience: e.target.value
                  })
                }
              />
              <label>Bio</label>
              <textarea
                rows="4"
                value={provider?.bio || ""}
                onChange={(e) =>
                  setProvider({
                    ...provider,
                    bio: e.target.value
                  })
                }
              />

              <div className="skill-popup-buttons">

                <button
                  onClick={() =>
                    setShowEditPopup(false)
                  }
                >
                  Save
                </button>

                <button
                  className="close-skill-btn"
                  onClick={() =>
                    setShowEditPopup(false)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )
      }
    </div>

  );

}

export default ProviderDashboard;
