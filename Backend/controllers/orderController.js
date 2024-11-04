import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order from frontend 
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await userModel.findOneAndUpdate(req.body.userId, { cartData: {} });

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency : "inr",
                product_data : {
                    name : item.name
                },
            }
        }))
    } catch (error) {

    }
}

export { placeOrder };