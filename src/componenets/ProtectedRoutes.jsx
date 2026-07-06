// // import React, { useEffect, useState } from "react";
// // import {
// //   FaTools,
// //   FaImage,
// //   FaVideo,
// //   FaEye,
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// //   FaCalendarAlt,
// //   FaClock
// // } from "react-icons/fa";


// // function ProtectedRoutes() {

// //   const [bookings, setBookings] = useState([]);

// //   useEffect(() => {

// //     const storedBookings =
// //       JSON.parse(localStorage.getItem("serviceManBookings")) || [];

// //     setBookings(storedBookings);

// //   }, []);

// //   return (
// //     <div className="service-dashboard">

// //       {/* TOP PROFILE */}

// //       <div className="top-profile-card">

// //         <div className="profile-left">

// //           <img
// //             src="https://i.pravatar.cc/300"
// //             alt=""
// //             className="profile-dp"
// //           />

// //           <div>

// //             <h2>Arun Kumar</h2>

// //             <p className="profession">
// //               Plumbing Expert
// //             </p>

// //             <div className="details">

// //               <span>⭐ 4.9 Rating</span>

// //               <span>5+ Years Experience</span>

// //               <span>📍 Coimbatore</span>

// //             </div>

// //           </div>

// //         </div>

// //         <div className="service-list">

// //           <span>Pipe Fitting</span>
// //           <span>Bathroom Repair</span>
// //           <span>Tap Installation</span>
// //           <span>Leakage Fixing</span>

// //         </div>

// //         <button className="public-btn">

// //           <FaEye />

// //           View Public Profile

// //         </button>

// //       </div>

// //       {/* ACTION SECTION */}

// //       <div className="action-wrapper">

// //         <div className="action-card skill-card">

// //           <FaTools />

// //           <h3>Add Skill</h3>

// //           <p>
// //             Mention your service skill
// //           </p>

// //         </div>

// //         <div className="action-card image-card">

// //           <FaImage />

// //           <h3>Upload Image</h3>

// //           <p>
// //             Upload work photos
// //           </p>

// //         </div>

// //         <div className="action-card video-card">

// //           <FaVideo />

// //           <h3>Upload Video</h3>

// //           <p>
// //             Upload work videos
// //           </p>

// //         </div>

// //       </div>

// //       {/* IMAGE SECTION */}

// //       <div className="media-section">

// //         <div className="media-header">

// //           <h2>Work Images</h2>

// //           <button>View All</button>

// //         </div>

// //         <div className="image-grid">

// //           <img
// //             src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
// //             alt=""
// //           />

// //           <img
// //             src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
// //             alt=""
// //           />

// //           <img
// //             src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
// //             alt=""
// //           />

// //           <div className="add-box">
// //             +
// //           </div>

// //         </div>

// //       </div>

// //       {/* VIDEO SECTION */}

// //       <div className="media-section">

// //         <div className="media-header">

// //           <h2>Work Videos</h2>

// //           <button>View All</button>

// //         </div>

// //         <div className="video-grid">

// //           <video controls>
// //             <source
// //               src="https://www.w3schools.com/html/mov_bbb.mp4"
// //             />
// //           </video>

// //           <video controls>
// //             <source
// //               src="https://www.w3schools.com/html/movie.mp4"
// //             />
// //           </video>

// //         </div>

// //       </div>

// //       {/* LIVE BOOKINGS */}

// //       <div className="booking-section">

// //         <div className="booking-top">

// //           <h2>Live Booking Requests</h2>

// //           <span>
// //             {bookings.length} New
// //           </span>

// //         </div>

// //         {
// //           bookings.map((item, index) => (

// //             <div
// //               className="booking-card"
// //               key={index}
// //             >

// //               <div className="booking-left">

// //                 <img
// //                   src="https://i.pravatar.cc/150?img=12"
// //                   alt=""
// //                 />

// //                 <div>

// //                   <h3>
// //                     {item.customerName}
// //                   </h3>

// //                   <p>
// //                     <FaPhoneAlt />
// //                     {item.phone}
// //                   </p>

// //                 </div>

// //               </div>

// //               <div className="booking-middle">

// //                 <p>
// //                   <FaCalendarAlt />
// //                   {item.date}
// //                 </p>

// //                 <p>
// //                   <FaClock />
// //                   {item.time}
// //                 </p>

// //                 <p>
// //                   <FaMapMarkerAlt />
// //                   {item.address}
// //                 </p>

// //                 <p className="problem">
// //                   {item.notes}
// //                 </p>

// //               </div>

// //               <div className="booking-right">

// //                 <button className="accept-btn">
// //                   Accept
// //                 </button>

// //                 <button className="reject-btn">
// //                   Reject
// //                 </button>

// //                 <button className="call-btn">
// //                   Call
// //                 </button>

// //               </div>

// //             </div>

// //           ))
// //         }

// //       </div>

// //     </div>
// //   );
// // }

// // export default ProtectedRoutes;
// import React, { useState, useEffect } from 'react';
// import {
//   FaTools,
//   FaImage,
//   FaVideo,
//   FaEye,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaClock
// } from "react-icons/fa";

// import { useNavigate } from 'react-router-dom';
// import {  FaFolderOpen, FaCertificate, FaPlusCircle, FaCamera, FaTrash, FaIdCard } from 'react-icons/fa';
// import '../styles/providerlogin.css'; 
// import serviceMan from '../data/profilecard'; // Real matching database source array

// function Providerlogin() {
//   const [bookings, setBookings] = useState([]);
  
//     useEffect(() => {
  
//       const storedBookings =
//         JSON.parse(localStorage.getItem("serviceManBookings")) || [];
  
//       setBookings(storedBookings);
  
//     }, []);
//   const navigate = useNavigate();
  
//   // Dashboard runtime memory systems toggles state control counters
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [expertProfile, setExpertProfile] = useState(null);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
//   // 🪪 Verification & Profile Sign-up Forms parameters properties fields setups
//   const [regForm, setRegForm] = useState({
//     category: 'Master Plumber',
//     experience: '',
//     skills: '',
//     bio: '',
//     photo: '',      // WhatsApp DP Base64 String
//     aadharNo: '',   // Fraud protection check parameters 1
//     govProof: ''    // Fraud protection check parameters 2
//   });
  
//   // 📸 Pure Instagram style media variables strings objects state initialization
//   const [postForm, setPostForm] = useState({
//     type: 'image',
//     url: ''
//   });

//   useEffect(() => {
//     let localServiceMen = JSON.parse(localStorage.getItem('allServiceMen'));
//     if (!localServiceMen) {
//       localStorage.setItem('allServiceMen', JSON.stringify(serviceMan));
//       localServiceMen = serviceMan;
//     }
    
//     // Intha browser memory layer local systems checks tracks dynamic matches loops
//     const activeCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
//     if (activeCustomer) {
//       const foundExpert = localServiceMen.find(man => man.linkedEmail === activeCustomer.email);
//       if (foundExpert) {
//         setExpertProfile(foundExpert);
//         setIsRegistered(true);
//       }
//     }
//   }, []);

//   // Computer binary media document parser handlers variables strings converters utility tool
//   const handleFileLoad = (e, fileTarget) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (fileTarget === 'photo') setRegForm({ ...regForm, photo: reader.result });
//         if (fileTarget === 'proof') setRegForm({ ...regForm, govProof: reader.result });
//         if (fileTarget === 'post') setPostForm({ ...postForm, url: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // 📝 PHASE A: Onboarding Security Registrations Submit Action Handler triggers
//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     const activeCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
//     const localServiceMen = JSON.parse(localStorage.getItem('allServiceMen')) || serviceMan;
    
//     // 🚨 UNIQUE KEY STRUCTURE MATCHING: Mapped exactly according to your profile structure keys names!
//     const newExpert = {
//       id: localServiceMen.length + 1,
//       linkedEmail: activeCustomer?.email || "expert@email.com",
//       photo: regForm.photo || activeCustomer?.photo || "https://unsplash.com", 
//       name: activeCustomer?.name || "Professional Expert",
//       category: regForm.category,
//       rating: 4.9,
//       experience: regForm.experience + "+ Years",
//       skills: regForm.skills.split(',').map(s => s.trim()), 
//       bio: regForm.bio,
//       aadharNo: regForm.aadharNo, // Security tracking criteria variables logs
//       posts: [] 
//     };

//     const updatedServiceMen = [...localServiceMen, newExpert];
//     localStorage.setItem('allServiceMen', JSON.stringify(updatedServiceMen));
//     setExpertProfile(newExpert);
    
//     // Trigger pop-up visibility loop indicator settings instead of alert box!
//     setShowSuccessPopup(true);
//   };

//   // Pop-up panel selection closure path
//   const handlePopupClose = () => {
//     setShowSuccessPopup(false);
//     setIsRegistered(true);
//   };

//   // 📸 PHASE B: Pure Instagram Content Publication Submit Handler
//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     const localServiceMen = JSON.parse(localStorage.getItem('allServiceMen')) || serviceMan;
    
//     const newPost = {
//       id: Date.now(),
//       type: postForm.type,
//       url: postForm.url
//     };

//     const updatedPosts = [newPost, ...(expertProfile.posts || [])];
//     const updatedProfile = { ...expertProfile, posts: updatedPosts };
//     setExpertProfile(updatedProfile);

//     const updatedMasterList = localServiceMen.map(man => man.id === expertProfile.id ? updatedProfile : man);
//     localStorage.setItem('allServiceMen', JSON.stringify(updatedMasterList));

//     setPostForm({ type: 'image', url: '' }); 
//     alert("New Portfolio Work Sample Posted Successfully!");
//   };

//   // 🗑️ INSTAGRAM FEATURE REMOVE: Deletes a specific image post from gallery
//   const handlePostDelete = (postId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this portfolio work sample post?");
//     if (confirmDelete) {
//       const localServiceMen = JSON.parse(localStorage.getItem('allServiceMen')) || serviceMan;
      
//       // Filter out the selected post ID from expert feeds logs array elements data lists
//       const remainingPosts = expertProfile.posts.filter(p => p.id !== postId);
//       const updatedProfile = { ...expertProfile, posts: remainingPosts };
//       setExpertProfile(updatedProfile);

//       const updatedMasterList = localServiceMen.map(man => man.id === expertProfile.id ? updatedProfile : man);
//       localStorage.setItem('allServiceMen', JSON.stringify(updatedMasterList));
//       alert("Post Deleted Successfully from Portfolio Feed Grid!");
//     }
//   };

//   if (!isRegistered) {
//     return (
//       <div className="become-provider-wrapper">
//         <div className="form-card-box">
//           <h2><FaTools /> Expert Professional Verification</h2>
//           <p className="subtitle-text">Fill absolute credentials properties to verification security layers fraud tracking check queue.</p>
          
//           <form onSubmit={handleRegisterSubmit}>
            
//             {/* 📸 WHATSAPP STYLE ROUNDED PROFILE AVATAR PHOTO PICKER */}
//             <div className="avatar-upload-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', gap: '8px' }}>
//               <label style={{ cursor: 'pointer', position: 'relative' }}>
//                 <input type="file" accept="image/*" onChange={(e) => handleFileLoad(e, 'photo')} style={{ display: 'none' }} />
//                 {regForm.photo ? (
//                   <img src={regForm.photo} alt="avatar preview" style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #0b2545' }} />
//                 ) : (
//                   <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px', color: '#64748b' }}><FaCamera /></div>
//                 )}
//               </label>
//               <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>📸 Upload Professional Avatar Photo</span>
//             </div>

//             <div className="input-group-box">
//               <label><FaFolderOpen /> Primary Service Specialty Field</label>
//               <select value={regForm.category} onChange={(e) => setRegForm({...regForm, category: e.target.value})}>
//                 <option value="Master Plumber">Plumbing Specialist</option>
//                 <option value="Electrician">Electrician Specialist</option>
//                 <option value="Cleaning">Cleaning Specialists</option>
//                 <option value="AC Repair">AC Repair Expert</option>
//                 <option value="Painting">Painting Specialist</option>
//                 <option value="Carpentry">Carpentry Work</option>
//               </select>
//             </div>

//             <div className="input-group-box">
//               <label><FaCertificate /> Work Experience (In Years)</label>
//               <input type="number" placeholder="e.g. 5" min="1" value={regForm.experience} onChange={(e) => setRegForm({...regForm, experience: e.target.value})} required />
//             </div>

//             {/* 🛡️ SECURITY AUDIT CONTROLS FIELDS PANELS (FRAUD PROTECTION ENTRIES) */}
//             <div className="input-group-box">
//               <label><FaIdCard /> Government Aadhaar Identification Number</label>
//               <input type="text" placeholder="12-Digit Aadhaar Code (e.g. 1234 5678 9012)" pattern="[0-9 ]{12,14}" value={regForm.aadharNo} onChange={(e) => setRegForm({...regForm, aadharNo: e.target.value})} required />
//             </div>

//             <div className="input-group-box">
//               <label>Upload Aadhaar / Govt ID Document Proof</label>
//               <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileLoad(e, 'proof')} required />
//             </div>

//             <div className="input-group-box">
//               <label>Expertise Skills (Separated by Commas)</label>
//               <input type="text" placeholder="e.g. Leakage detection, Tap fixing, Tank clean" value={regForm.skills} onChange={(e) => setRegForm({...regForm, skills: e.target.value})} required />
//             </div>

//             <div className="input-group-box">
//               <label>Service Biography Profile Description</label>
//               <textarea placeholder="Biography details context..." rows="3" value={regForm.bio} onChange={(e) => setRegForm({...regForm, bio: e.target.value})} required></textarea>
//             </div>

//             <button type="submit" className="submit-application-btn">Submit Profiles For Approvals</button>
//           </form>
//         </div>

//         {/* 🚨 DYNAMIC POP-UP ALERTS MODULE PANEL STRUCTURAL CLOSURES GRID */}
//         {showSuccessPopup && (
//           <div className="popup-overlay" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '2000' }}>
//             <div className="success-popup" style={{ background: 'white', padding: '35px', borderRadius: '16px', textAlign: 'center', maxWidth: '450px', width: '90%' }}>
//               <div style={{ fontSize: '40px', color: '#22c55e', marginBottom: '15px' }}>✔</div>
//               <h2 style={{ margin: '0 0 10px 0', color: '#0b2545' }}>Onboarding Request Received!</h2>
//               <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Your official documents and profile identification numbers metrics checks have been submitted. **FixLocal Admin Approval verification is active!** Card added in backend lists.</p>
//               <button onClick={handlePopupClose} style={{ marginTop: '20px', padding: '12px 25px', background: '#0b2545', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Go to Operations Console Dashboard</button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="service-dashboard">
   
//          {/* TOP PROFILE */}
   
//          <div className="top-profile-card">
   
//            <div className="profile-left">
   
//              <img
//                src="https://i.pravatar.cc/300"
//                alt=""
//                className="profile-dp"
//              />
   
//              <div>
   
//                <h2>Arun Kumar</h2>
   
//                <p className="profession">
//                  Plumbing Expert
//                </p>
   
//                <div className="details">
   
//                  <span>⭐ 4.9 Rating</span>
   
//                  <span>5+ Years Experience</span>
   
//                  <span>📍 Coimbatore</span>
   
//                </div>
   
//              </div>
   
//            </div>
   
//            <div className="service-list">
   
//              <span>Pipe Fitting</span>
//              <span>Bathroom Repair</span>
//              <span>Tap Installation</span>
//              <span>Leakage Fixing</span>
   
//            </div>
   
//            <button className="public-btn">
   
//              <FaEye />
   
//              View Public Profile
   
//            </button>
   
//          </div>
   
//          {/* ACTION SECTION */}
   
//          <div className="action-wrapper">
   
//            <div className="action-card skill-card">
   
//              <FaTools />
   
//              <h3>Add Skill</h3>
   
//              <p>
//                Mention your service skill
//              </p>
   
//            </div>
   
//            <div className="action-card image-card">
   
//              <FaImage />
   
//              <h3>Upload Image</h3>
   
//              <p>
//                Upload work photos
//              </p>
   
//            </div>
   
//            <div className="action-card video-card">
   
//              <FaVideo />
   
//              <h3>Upload Video</h3>
   
//              <p>
//                Upload work videos
//              </p>
   
//            </div>
   
//          </div>
   
//          {/* IMAGE SECTION */}
   
//          <div className="media-section">
   
//            <div className="media-header">
   
//              <h2>Work Images</h2>
   
//              <button>View All</button>
   
//            </div>
   
//            <div className="image-grid">
   
//              <img
//                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
//                alt=""
//              />
   
//              <img
//                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
//                alt=""
//              />
   
//              <img
//                src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
//                alt=""
//              />
   
//              <div className="add-box">
//                +
//              </div>
   
//            </div>
   
//          </div>
   
//          {/* VIDEO SECTION */}
   
//          <div className="media-section">
   
//            <div className="media-header">
   
//              <h2>Work Videos</h2>
   
//              <button>View All</button>
   
//            </div>
   
//            <div className="video-grid">
   
//              <video controls>
//                <source
//                  src="https://www.w3schools.com/html/mov_bbb.mp4"
//                />
//              </video>
   
//              <video controls>
//                <source
//                  src="https://www.w3schools.com/html/movie.mp4"
//                />
//              </video>
   
//            </div>
   
//          </div>
   
//          {/* LIVE BOOKINGS */}
   
//          <div className="booking-section">
   
//            <div className="booking-top">
   
//              <h2>Live Booking Requests</h2>
   
//              <span>
//                {bookings.length} New
//              </span>
   
//            </div>
   
//            {
//              bookings.map((item, index) => (
   
//                <div
//                  className="booking-card"
//                  key={index}
//                >
   
//                  <div className="booking-left">
   
//                    <img
//                      src="https://i.pravatar.cc/150?img=12"
//                      alt=""
//                    />
   
//                    <div>
   
//                      <h3>
//                        {item.customerName}
//                      </h3>
   
//                      <p>
//                        <FaPhoneAlt />
//                        {item.phone}
//                      </p>
   
//                    </div>
   
//                  </div>
   
//                  <div className="booking-middle">
   
//                    <p>
//                      <FaCalendarAlt />
//                      {item.date}
//                    </p>
   
//                    <p>
//                      <FaClock />
//                      {item.time}
//                    </p>
   
//                    <p>
//                      <FaMapMarkerAlt />
//                      {item.address}
//                    </p>
   
//                    <p className="problem">
//                      {item.notes}
//                    </p>
   
//                  </div>
   
//                  <div className="booking-right">
   
//                    <button className="accept-btn">
//                      Accept
//                    </button>
   
//                    <button className="reject-btn">
//                      Reject
//                    </button>
   
//                    <button className="call-btn">
//                      Call
//                    </button>
   
//                  </div>
   
//                </div>
   
//              ))
//            }
   
//          </div>
   
//        </div>
//   );
// }

// export default Providerlogin;
