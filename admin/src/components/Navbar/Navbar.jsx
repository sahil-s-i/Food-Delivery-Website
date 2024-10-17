import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assests'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-text-container">
                <h1 className='logo-text'>Foodie.</h1>
                <p>Admin panel</p>
            </div>
            <img className='profile' src={assets.profile_image} alt="profile image" />

        </div>
    )
}

export default Navbar
