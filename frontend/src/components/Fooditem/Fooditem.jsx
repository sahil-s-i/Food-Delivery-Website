import React from 'react'
import './Fooditem.css';

const Fooditem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="food item image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">

        </div>
      </div>
    </div>
  )
}

export default Fooditem
