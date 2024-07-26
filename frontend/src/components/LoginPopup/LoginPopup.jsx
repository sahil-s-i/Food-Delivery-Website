import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign up")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="close icon" />
                    <h1>Lorem, ipsum dolor.</h1>
                </div>
                <div className="login-popup-inputs">
                    <input type="text" name="" id="" placeholder='Your Name' required />
                    <input type="email" name="" id="" placeholder='Email' required />
                    <input type="password" name="" id="" placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
            </form>
        </div>
    )
}

export default LoginPopup
