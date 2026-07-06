import React, { useState } from "react";

import {
  FaTools,
  FaFolderOpen,
  FaCertificate,
  FaCamera,
  FaIdCard
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../styles/providerregister.css";
import servicesData from "../data/servicesData";

function ProviderRegister() {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);


  const [regForm, setRegForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    category: "",
    experience: "",
    skills: "",
    bio: "",
    idProof: "",
    businessName: "",
    gstNo: ""
  });


  function handleSubmit(e) {

    e.preventDefault();

    const newProvider = {
      id: Date.now(),

      name: regForm.name,
      phone: regForm.phone,
      email: regForm.email,
      address: regForm.address,

      category: regForm.category,
      experience: Number(regForm.experience),

      skills: regForm.skills
        .split(",")
        .map(skill => skill.trim()),

      bio: regForm.bio,

      idProof: regForm.idProof,

      businessName: regForm.businessName,
      gstNo: regForm.gstNo,

      approved: false,
      status: "Pending",
      isBanned: false,

      rating: 0,
      posts: []
    };
    console.log("Provider Register Data:", newProvider);

    setShowPopup(true);

  }

  function handleContinue() {

    navigate("/providerdasbord");

  }

  return (

    <div className="provider-register">

      <div className="register-card">

        <h2>

          <FaTools />

          Become Service Expert

        </h2>

        <p className="sub-text">
          Create your professional profile
        </p>

        <form onSubmit={handleSubmit}>
          {/* NAME */}

          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter name"
              value={regForm.name}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  name: e.target.value
                })
              }
            />

          </div>
          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={regForm.phone}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  phone: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={regForm.email}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  email: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label>Address</label>

            <textarea
              rows="3"
              placeholder="Enter Address"
              value={regForm.address}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  address: e.target.value
                })
              }
            />
          </div>

          {/* CATEGORY */}

          <div className="input-group">

            <label>

              <FaFolderOpen />

              Service Category

            </label>

            <select
              value={regForm.category}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  category: e.target.value
                })
              }
            >

              <option value="">
                Select Service Category
              </option>

              {servicesData.map((service) => (

                <option
                  key={service.id}
                  value={service.name}
                >
                  {service.name}
                </option>

              ))}

            </select>
          </div>

          {/* EXPERIENCE */}

          <div className="input-group">

            <label>

              <FaCertificate />

              Experience

            </label>

            <input
              type="number"
              required
              placeholder="Years"
              value={regForm.experience}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  experience: e.target.value
                })
              }
            />

          </div>

          {/* AADHAR */}
          <div className="input-group">

            <label>
              <FaIdCard />
              Government ID Photo
            </label>
             <small>
              Upload Aadhaar / Driving License / Voter ID
            </small>
            

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  idProof: e.target.files[0]
                })
              }
            />

           

          </div>


          <div className="input-group">
            <label>Business Name (Optional)</label>

            <input
              type="text"
              placeholder="Business Name"
              value={regForm.businessName}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  businessName: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label>GST Number (Optional)</label>

            <input
              type="text"
              placeholder="GST Number"
              value={regForm.gstNo}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  gstNo: e.target.value
                })
              }
            />
          </div>

          {/* SKILLS */}

          <div className="input-group">

            <label>
              Skills
            </label>

            <input
              type="text"
              required
              placeholder="Pipe fitting, Tap repair"
              value={regForm.skills}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  skills: e.target.value
                })
              }
            />

          </div>

          {/* BIO */}

          <div className="input-group">

            <label>
              Bio
            </label>

            <textarea
              rows="4"
              required
              placeholder="About your service"
              value={regForm.bio}
              onChange={(e) =>
                setRegForm({
                  ...regForm,
                  bio: e.target.value
                })
              }
            />

          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Profile
          </button>

        </form>

      </div>

      {/* POPUP */}

      {
        showPopup && (

          <div className="popup-overlay">

            <div className="success-popup">

              <div className="success-icon">
                ✔
              </div>

              <h2>
                Profile Submitted
              </h2>

              <p>
                Waiting for admin approval
              </p>

              <button
                onClick={handleContinue}
                className="popup-btn"
              >
                Continue
              </button>

            </div>

          </div>

        )
      }

    </div>

  );

}

export default ProviderRegister;