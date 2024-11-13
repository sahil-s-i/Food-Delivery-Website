import React, { useEffect, useState } from 'react'
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assests';

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url + "/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data)
        }
        else {
            toast.error("Error");
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, [])

    return (
        <div className='order add'>
            {orders.map((order, index) => {
                <div key={index} className="order-item">
                    <img src={assets.parcel_icon} alt="Parcel icon" />
                    <div>
                        <p className='order-item-food'>
                            {order.item.map((item, index) => {
                                if (index === order.item.length - 1) {
                                    return item.name + " x " + item.quantity;
                                }
                                else {
                                    return item.name + " x " + item.quantity + ", ";
                                }
                            })}
                        </p>
                        <p className="order-item-name">
                            {order.address.firstname + " " + order.address.lastname}
                        </p>
                        <div className='order-item-address'>
                            <p>{order.address.street+","}</p>
                            <p>{order.address.city+", " + order.address.state+", " + order.address.country+", "+order.address.zipcode }</p>
                        </div>
                        <p className='order-item-phone'>
                            {order.address.phone}
                        </p>
                    </div>
                    <p>Items : {order.item.length}</p>
                </div>
            })}
        </div>
    )
}

export default Orders
