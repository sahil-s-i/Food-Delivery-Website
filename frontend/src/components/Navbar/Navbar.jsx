import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("menu");

    return (
        <div className='navbar'>
            {/* <img src={assets.logo} alt="logo image" className='logo' /> */}
            <div className="logo-text-container">
                <h1 className='logo-text'>Foodie</h1>
            </div>
            <ul className="navbar-menu">
                <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" className='resize-img' />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket icon" className='resize-img' />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
