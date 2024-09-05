import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="close icon" />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" name="" id="" placeholder='Your Name' required />}
                    <input type="email" name="" id="" placeholder='Email' required />
                    <input type="password" name="" id="" placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new account ? <span onClick={() => setCurrState("Sign up")}>Click here</span></p> :
                    <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup
