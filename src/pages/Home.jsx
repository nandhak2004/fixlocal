import React, { useState } from 'react';
import servicescard from '../data/servicescard';
import '../styles/Home.css'
// import '../styles/service.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import serviceMan from '../data/profilecard';
function Home() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  function handleservice() {
    navigate('/services')
  };
  function handlemembers(category) {
    navigate(`/member/${category}`)
  }

  function handleSearch() {

    const service = servicescard.find(
      item =>
        item.category.toLowerCase() ===
        query.toLowerCase()
    );

    if (service) {
      navigate(`/member/${service.category}`);
    } else {
      alert("Service not found");
    }

  }
  const popularOnes = servicescard.slice(0, 3)
  const steps = [
    {
      id: 1,
      title: "Choose Service",
      desc: "Select from our list of verified local experts.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Book a Schedule",
      desc: "Pick a time that works best for you.",
      icon: "📅"
    },
    {
      id: 3,
      title: "Get it Done",
      desc: "Sit back and relax while we fix it for you.",
      icon: "✅"
    }
  ];


  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Trusted <br /> <span>Service Providers</span></h1>
          <p>Book verified experts for all your home needs.</p>

          {/* Search Bar Section */}
          <div className="search-wrapper">
            <div className="search-bar">
              <input
                type="text"
                placeholder="What service do you need? (e.g. Plumbing)"
                value={query}
                onChange={(e) => {
                  const value = e.target.value;
                  setQuery(value);

                  if (value.trim()) {
                    const filtered = servicescard.filter(service =>
                      service.category
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    );

                    setSuggestions(filtered);
                  } else {
                    setSuggestions([]);
                  }
                }}
              />
              <button className="search-btn" onClick={handleSearch} >Find Help Now</button>
            </div>
            {suggestions.length > 0 && (
              <div className="suggestions-box">
                {suggestions.map((service) => (
                  <div
                    key={service.id}
                    className="suggestion-item"
                    onClick={() => {
                      navigate(`/member/${service.category}`);
                      setQuery(service.category);
                      setSuggestions([]);
                    }}
                  >
                    {service.category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Section */}
          <div className="rating-container">
            <div className="star-icons">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="rating-text"><b>4.8/5</b> rating from 10k+ customers</p>
          </div>
        </div>

      </section>

      <div className="service-page-container">
        <section className="service-header">
          <h2 className="section-title">Our Most Popular Services</h2>

        </section>

        <div className="services-grid">
          {popularOnes.map((service) => (
            <div key={service.id} className="service-category-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.category}</h3>
              <div className="service-info">
                <span className="rating">⭐ {service.rating}</span>
                <span className="members-count">
                  {
                    serviceMan.filter(
                      member => member.category === service.category
                    ).length
                  } Experts Available
                </span>
              </div>
              <button className="view-members-btn" onClick={() => handlemembers(service.category)}>
                View Members
              </button>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <button className="view-all-btn" onClick={handleservice}>
            View All Services →
          </button>
        </div>

      </div>


      {/* process */}
      <section className="process-section">
        <h2 className="section-title">Simple 3-Step Process</h2>
        <div className="process-container">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* footer section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Logo & About */}
          <div className="footer-col">
            <h2 className="footer-logo">FixLocal</h2>
            <p>Your trusted partner for all home services. Verified professionals at your doorstep.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><FaEnvelope /> nk8300062@gmail.com</p>
            <p><FaPhoneAlt /> +91 9342979681</p>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FixLocal. All rights reserved.</p>
        </div>
      </footer>


    </div>

  )
}

export default Home
