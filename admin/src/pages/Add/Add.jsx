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
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input type="text" name="name" placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea name="description" rows='6'></textarea>
                </div>
            </form>
        </div>
    )
}

export default Add
