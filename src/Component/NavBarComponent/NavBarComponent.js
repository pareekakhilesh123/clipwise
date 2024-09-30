import React from 'react'
import './NavBarComponent.css'

function NavBarComponent() {
  return (
    <nav className="navbar">
    <div className="logo">
     <img src='img/logo.svg' alt='logo'></img>
    </div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/help">Help</a></li>
    </ul>
      <div className='AddCardBag'>
        <div className='count'>
            <span>00</span>
        </div>
        <div className='bag'>
        <img src='img/ion_basket.svg' alt='ion_basket'></img>

        </div>
      </div>
  </nav>
  ) 
}

export default NavBarComponent