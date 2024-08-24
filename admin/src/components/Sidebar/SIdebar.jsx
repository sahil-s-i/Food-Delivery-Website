import React from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assests';
import { NavLink } from 'react-router-dom';

const SIdebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="Add icon" />
          <p>Add Items</p>
        </NavLink>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="Add icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default SIdebar
