import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.basket_icon} alt="logo image" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus quaerat error ex, atque eaque nulla vel, ut magnam unde velit alias consequatur et dicta harum doloremque, dolor voluptates recusandae!</p>
          
        </div>
        <div className="footer-content-center">

        </div>
        <div className="footer-content-right">

        </div>
      </div>

    </div>
  )
}

export default Footer
