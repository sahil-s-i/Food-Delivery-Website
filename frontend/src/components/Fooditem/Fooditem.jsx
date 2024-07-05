import React from 'react'
import './Fooditem.css';
import { assets } from '../../assets/assets';

const Fooditem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="food item image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.header_img} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
    </div>
  )
}

export default Fooditem
