import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assests'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                foodie
            </div>
            <img className='profile' src={assets.profile_image} alt="profile image" />

        </div>
    )
}

export default Navbar
