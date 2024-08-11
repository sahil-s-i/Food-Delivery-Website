import foodModel from "../models/foodmodel";
import fs from "fs";

// Add food item 
const addFood = async((req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    })

})

export { addFood }