import React from 'react'
import './Add.css';
import { assets } from '../../assets/assests'

const Add = () => {
    return (
        <div className='Add'>
            <form className='flex-col'>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={assets.upload} alt="image upload" />
                    </label>
                    <input type="file" id="image" hidden required />
                </div>
                <div className="add-product-name">
                    
                </div>
            </form>
        </div>
    )
}

export default Add
