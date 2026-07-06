import React, { useState } from 'react';
import '../styles/profile.css';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import serviceMan from '../data/profilecard';



function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = serviceMan.find(p => p.id === Number(id));

  // const [selectedPost, setSelectedPost] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);






  function handlebooking(id) {
    navigate(`/booking/${id}`)
  }
  if (!profile) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Expert Not Found</div>;
  }

  function handleNextPost() {

    setSelectedIndex((prev) =>
      prev === profile.posts.length - 1
        ? 0
        : prev + 1
    );

  }

  function handlePrevPost() {

    setSelectedIndex((prev) =>
      prev === 0
        ? profile.posts.length - 1
        : prev - 1
    );

  }


  return (

    <div className="profile-wrapper">

      <div className="profile-header-sec">
        <div className="profile-dp">
          <img
            src={profile.photo}
            alt={profile.name}
          />
        </div>

        <div className="profile-main-info">
          <div className="name-verify">
            <h2>{profile.name}</h2>
            <FaCheckCircle className="verify-icon" title="Verified Expert" />
          </div>

          <div className="quick-stats">
            <span><b>{profile.posts.length}</b> Posts</span>
            <span><b>{profile.experience} Years</b> Experience</span>
            <span><b><FaStar className="star-sm" /> {profile.rating}</b> Rating</span>
          </div>

          <div className="bio-section">
            <h4>{profile.category}</h4>
            <p>{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* 2. Skills Section (Chips Design) */}
      <div className="skills-section">
        <h3>My Expertise</h3>
        <div className="skill-grid">
          {profile.skills.map((skill, index) => (
            <span key={index} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* 3. Portfolio Grid (The Works) */}
      <div className="portfolio-gallery">
        <h3>Previous Work Samples</h3>


        <div className="posts-grid">
          {profile.posts.length > 0 ? (
            profile.posts.map((post, index) => (
              <div className="post-card" key={post.id} onClick={() => setSelectedIndex(index)}>
                {post.type === 'image' ? (
                  <img src={post.url} alt="work sample" />
                ) : (
                  <div className="video-preview">

                    <video
                      src={post.url}
                      muted
                      preload="metadata"
                      playsInline
                    />

                    <div className="play-overlay">
                      ▶
                    </div>

                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-posts">
              <h4>No Posts Yet</h4>
              <p>This expert has not uploaded any work samples.</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Sticky Book Now Button */}
      <div className="booking-sticky-bar">
        <div className="book-info">
          <span>Need help from {profile.name}?</span>
        </div>
        <button className="book-final-btn" onClick={() => handlebooking(profile.id)}>Book Appointment Now</button>
      </div>
      {selectedIndex !== null && (

        <div className="reels-modal">

          <button
            className="close-reels"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>
          <button
            className="nav-btn left"
            onClick={handlePrevPost}
          >
            ❮
          </button>

          <button
            className="nav-btn right"
            onClick={handleNextPost}
          >
            ❯
          </button>

          <div className="reels-slide">

            {profile.posts[selectedIndex]?.type === "image" ? (

              <img
                src={profile.posts[selectedIndex]?.url}
                alt=""
                className="reels-media"
              />

            ) : (

              <video
                key={profile.posts[selectedIndex]?.id}
                src={profile.posts[selectedIndex]?.url}
                controls
                autoPlay
                className="reels-media"
              />

            )}

          </div>
          
        </div>

      )
      }
    </div >

  );
}


export default Profile
