import { useNavigate } from 'react-router-dom';
import servicescard from '../data/servicescard';
import '../styles/service.css'
import React, { useState } from 'react';
import serviceMan from '../data/profilecard';

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  function handlemembers(category) {
    navigate(`/member/${category}`)
  }
  const filteredServices = servicescard.filter(service =>
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="service-page-container">
        <section className="service-header">
          <h1>Our Comprehensive Services</h1>
          <p>Find the best local experts based on their skills and ratings.</p>
          <div className="service-search-wrapper">
            <input
              type="text"
              placeholder="Search for a service... (e.g. Plumbing)"
              className="service-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <div className="services-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="service-category-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.category}</h3>
                <div className="service-info">
                  <span className="rating">⭐ {service.rating}</span>
                  <span className="members-count">
                    {
                      serviceMan.filter(
                        member => member.category.toLowerCase() === service.category.toLowerCase()
                      ).length
                    } Experts Available
                  </span>
                </div>
                <button className="view-members-btn" onClick={() => handlemembers(service.category)}>
                  View Members
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No services found for "{searchTerm}"</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Services
