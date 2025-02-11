import React from 'react'
import logo from '../../../assets/h4-logo-footer.png'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/h4-logo-footer.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './nav.css'

const NavBar = () => {
  return (
    <div>
        
        <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white">
          
  <div className="navbar-start">
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost ">Menu</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-lime-950 text-white min-h-full w-40 p-4">
      {/* Sidebar content here */}

 <li><Link to="/">Home</Link></li>
 <li ><Link to="/about">About Us</Link></li>
 <li><Link to="/menu">Our Menu</Link></li>
 <li><Link to="/order">Order Food</Link></li>
 <li><Link to="/login">Login</Link></li>
 </ul>


  
  </div>
</div>
  </div>
  <div className="navbar-center">
    <a className="h-8 w-32"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
</div>
    
  )
}

export default NavBar

// <ul
// tabIndex={0}
// className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
// <li><Link to="/">Home</Link></li>
// <li><Link to="/about">About Us</Link></li>
// <li><Link to="/menu">Our Menu</Link></li>
// <li><Link to="/order">Order Food</Link></li>
// <li><Link to="/login">Login</Link></li>
// </ul>