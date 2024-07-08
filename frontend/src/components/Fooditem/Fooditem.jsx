import React, { useState } from 'react'
import './Fooditem.css';
import { assets } from '../../assets/assets';

const Fooditem = ({ id, name, price, description, image }) => {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="food item image" />
        {!itemCount
          ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt="icon white" />
          : <div className='food-item-counter'>
            <img onClick={() => setItemCount(prev => prev - 1)} src={assets.removeiconRed} alt="Remove icon" />
            <p>{itemCount}</p>
            <img onClick={() => setItemCount(prev => prev + 1)} src={assets.addiconGreen} alt="Green icon" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_star} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  )
}

export default Fooditem
