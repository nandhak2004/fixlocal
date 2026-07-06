import React from 'react';
import '../styles/member.css';
import { useNavigate, useParams } from 'react-router-dom';
import serviceMan from '../data/profilecard';


function Member() {
  const {category}=useParams();
  const navigate=useNavigate()
  const filtermember = serviceMan.filter(member => member.category.toLowerCase() === category.toLowerCase());

   
  function handleprofile(id){
    navigate(`/profile/${id}`)
  }
  function handlebooking(id){
    navigate(`/booking/${id}`)
  }

  return (
    <div className="members-page">
      <div className="members-header">
        <h2>Available {category} Experts</h2>
        <p>Choose the right person based on their skills and ratings.</p>
      </div>

      <div className="members-grid">
        {filtermember.map((member) => (
          <div className="member-card" key={member.id}>
            <div className="member-img">
              <img src={member.photo} alt={member.name} />
              <span className="rating-tag">⭐ {member.rating}</span>
            </div>
            
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role"> {member.category} • {member.experience}+ Years Experience</p>

              <div className="skills-chips">
                {member.skills.slice(0,2).map((skill, index) => (
                  <span key={index} className="skill-chip">{skill}</span>
                ))}
              </div>
              
              <div className="member-actions">
                <button className="view-profile" onClick={()=>handleprofile(member.id)}>View Profile</button>
                <button className="book-now" onClick={()=>handlebooking(member.id)}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;
