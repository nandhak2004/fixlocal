import React, { useState } from "react";
import serviceMan from "../data/profilecard";
import {
FaTrash,
FaImage,
FaVideo,
FaTools
} from "react-icons/fa";

import "../styles/myuploads.css";

function MyUploads() {

const [provider, setProvider] = useState(serviceMan[0]);

const totalPhotos =
provider.posts.filter(
post => post.type === "image"
).length;

const totalVideos =
provider.posts.filter(
post => post.type === "video"
).length;

function handleDeleteSkill(indexToDelete) {

  setProvider({
    ...provider,
    skills: provider.skills.filter(
      (_, index) =>
        index !== indexToDelete
    )
  });

}

function handleDeletePost(id) {

  setProvider({
    ...provider,
    posts: provider.posts.filter(
      post => post.id !== id
    )
  });

}

return (


<div className="myuploads-page">

  <div className="uploads-header">

    <h1>Portfolio Manager</h1>

    <p>
      Manage your skills, photos and videos.
    </p>

  </div>

  <div className="stats-grid">

    <div className="stat-card">

      <FaImage className="stat-icon" />

      <h3>{totalPhotos}</h3>

      <p>Photos</p>

    </div>

    <div className="stat-card">

      <FaVideo className="stat-icon" />

      <h3>{totalVideos}</h3>

      <p>Videos</p>

    </div>

    <div className="stat-card">

      <FaTools className="stat-icon" />

      <h3>{provider.skills.length}</h3>

      <p>Skills</p>

    </div>

  </div>

  <div className="expertise-section">

    <h2>My Expertise</h2>

    <div className="skills-list">

      {provider.skills.map(
        (skill, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <span>{skill}</span>

            <button
              onClick={() =>
                handleDeleteSkill(index)
              }
            >
              <FaTrash />
            </button>

          </div>

        )
      )}

    </div>

  </div>

  <div className="portfolio-section">

    <h2>My Uploads</h2>

    <div className="uploads-grid">

      {provider.posts.map(post => (

        <div
          className="uploads-card"
          key={post.id}
        >

          <div className="media-box">

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

          <div className="upload-info">

            <p className="upload-type">

              {post.type === "image"
                ? "📸 Photo"
                : "🎥 Video"}

            </p>

            <p>
              📅 {post.uploadDate || "No Date"}
            </p>

            <p>
              🕒 {post.uploadTime || "No Time"}
            </p>

          </div>

          <button
            className="delete-post-btn"
            onClick={() =>
              handleDeletePost(post.id)
            }
          >

            <FaTrash />

            Delete

          </button>

        </div>

      ))}

    </div>

  </div>

</div>


);

}

export default MyUploads;
