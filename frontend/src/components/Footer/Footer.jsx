import React from 'react'
import './Footer.css'
// import '../Navbar/Navbar.css'

import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.basket_icon} alt="logo image" /> */}
          <div className="logo-text-container">
            <h1 className='logo-text'>Foodie.</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus quaerat error ex, atque eaque nulla vel, ut magnam unde velit alias consequatur et dicta harum doloremque, dolor voluptates recusandae!</p>
          <div className="footer-social-icons">
            <img className="resize-img" src={assets.facebook} alt="facebook icon" />
            <img className="resize-img" src={assets.twitter} alt="twitter icon" />
            <img className="resize-img" src={assets.linkedin} alt="linked icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-12345678</li>
            <li>contact@foodie.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Foodie.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
