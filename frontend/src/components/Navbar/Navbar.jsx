import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    
    const [menu, setMenu] = useState("menu");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar'>
            {/* <img src={assets.logo} alt="logo image" className='logo' /> */}
            <Link to='/'>
                <div className="logo-text-container">
                    <h1 className='logo-text'>Foodie.</h1>
                </div>
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" className='resize-img' />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" className='resize-img' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
                    <div className='navbar-profile'>
                        <img className='resize-img' src={assets.user_icon} alt="profile image" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}><img className='resize-img' src={assets.bag_icon} alt="bag icon" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img className='resize-img' src={assets.lagout_icon} alt="lagout icon" /><p>Logout</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar;
