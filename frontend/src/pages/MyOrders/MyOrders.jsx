import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className="my-orders-order">

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
