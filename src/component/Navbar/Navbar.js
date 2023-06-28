import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import gh from './../../image/logo.jpg'
const Navbar = () => {
  return (
    <nav className='Nav'>
    <h2 className='logo'>
    <img src={gh}alt='logo'/>
    </h2>
    <ul className='menu'>
    <Link to="/">Our solution</Link>
    <Link to="/about">Resources</Link>
    <Link to="/services">About us</Link>
    <Link to="/contact">courses</Link>
    <button>Contact us</button>
    </ul>
   
    </nav>
    
  )
}

export default Navbar