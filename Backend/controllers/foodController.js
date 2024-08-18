import foodModel from "../models/foodmodel.js";
import fs from "fs";

// Add food item 
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    // let image_filename;
    // if (req.file) {
    //     image_filename = `${req.file.filename}`;
    // } else {
    //     console.log("No file was uploaded.");
    // }

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Addded" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

// all food list 
const listfood = async (req, res) => {

}

export { addFood, listfood }