import React, { useState } from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
  const [isLogin, setIsLogin] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmpassword: ""
  });
  const [show, Setshow] = useState(false)

  const navigate = useNavigate()
  function handlelogin() {
    navigate('/customerlogin')
    
  }
  const handlesign = (e) => {
    e.preventDefault();

     if (isLogin.password !== isLogin.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Your account is created successfully! Welcome to FixLocal.");

    navigate('/account');
  }
  return (
    <div>

      <div className="login-container">
        <div className="login-grid">

          {/* left side */}
          <div className="left-box">

            <div className="fix-animation">
              <h1>FIXLOCAL</h1>
            </div>
            <div className="left-content">
              <h2>Fast. Reliable. <br /><span>Trusted.</span></h2>
              <p>Experience the easiest way to manage your home services. We connect you with the best professionals in your neighborhood.</p>
              <ul className="perks-list">
                <li>🛡️ Safety First Professionals</li>
                <li>⭐ Rated 4.8/5 by Users</li>
              </ul>
            </div>
          </div>


          {/* right-side */}
          <div className="right-box">
            <div className="form-card">
              <h1>Join FixLocal</h1>
              <p className="form-subtitle">Create your account today</p>

              <form onSubmit={handlesign}>

                <div className="floating-input">
                  <label className='lable'>Full Name</label> <br />
                  <input type="text" placeholder="Name " value={isLogin.fullname} onChange={(e) => setIsLogin({ ...isLogin, fullname: e.target.value })} required />
                </div>

                <div className="floating-input">
                  <label className='lable'>Email Address</label><br />

                  <input type="email" placeholder="Email " value={isLogin.email} onChange={(e) => setIsLogin({ ...isLogin, email: e.target.value })} required />
                </div>
                <div className="floating-input">
                  <label className='lable'>Phone</label> <br />

                  <input type="tel" placeholder="Enter Phone Number " value={isLogin.phone} onChange={(e) => setIsLogin({ ...isLogin, phone: e.target.value })} required />
                </div>
                <div className="floating-input">
                  <label className='lable'>Address</label> <br />

                  <input type="text" placeholder="Enter Address " value={isLogin.address} onChange={(e) => setIsLogin({ ...isLogin, address: e.target.value })} required />
                </div>
                <div className="pass-input">
                  <label className='lable'>Password</label> <br />

                  <input type={show ? "text" : "password"} placeholder="Password "  value={isLogin.password} onChange={(e) => setIsLogin({ ...isLogin, password: e.target.value })} required />
                  <span onClick={() => Setshow(!show)} >{show ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <div className="floating-input">
                  <label className='lable'>Confirm Password</label> <br />

                  <input type={show ? "text" : "password"} placeholder="Confirm Password " value={isLogin.confirmpassword} onChange={(e) => setIsLogin({ ...isLogin, confirmpassword: e.target.value })} required />
                </div>


                <button className="login-btn">
                  Register
                </button>
              </form>

              <p className="login-create">
                Already have an account?
                <button onClick={handlelogin}>login</button>

              </p>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Signup
