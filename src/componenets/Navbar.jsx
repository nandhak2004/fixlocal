import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'


function Navbar() {

  return (
    <header>
      <h1>Fix <span className='head1'>Local</span></h1>

      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/services' className='link'>Services</Link>
        <Link to='/mybooking' className='link' >MyBooking</Link>
        <Link to='/account' className='link'>Account</Link>
        <Link to='/customerlogin' className='link'>Login</Link>



      </nav>
    </header>
  )
}

export default Navbar

