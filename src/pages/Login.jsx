import React, { useState } from 'react'

import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [isLogin, setIsLogin] = useState({
    email:"",
    password:""
  });
  const [show,Setshow]=useState(false)
  const navigate=useNavigate()
  function handlesignup(){
    navigate('/signup')
  };
 
    const handlelog = (e) => {
    e.preventDefault();
     alert('login successful')
 navigate('/account');
  };

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
            <h2>Fast. Reliable. <br/><span>Trusted.</span></h2>
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
            <h1>Welcome Back</h1>
            <p className="form-subtitle">Please login to your account</p>
            
            <form onSubmit={handlelog}>
              <div className="floating-input">
                <label className='lable'>Email Address</label><br />

                <input type="email"  placeholder="Email " value={isLogin.email} onChange={(e)=>setIsLogin({...isLogin,email:e.target.value})} required/>
              </div>
              <div  className="pass-input">
                <label className='lable'>Password</label> <br />

                <input type={show? "text" :"password"} placeholder="Password "   value={isLogin.password} onChange={(e)=>setIsLogin({...isLogin,password:e.target.value})} required/>
                <span onClick={()=>Setshow(!show)} >{show?<FaEyeSlash/>:<FaEye/>}</span>
              </div>
              
              <button className="login-btn">Login</button>
            </form>

            <p className="login-create">
              Don't have an account? 
              <button onClick={handlesignup}>  Sign Up </button>
             
              
            </p>
          </div>
        </div>

      </div>
    </div>
 


    </div>
  )
}

export default Login
