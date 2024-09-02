import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user
const loginUser = async (req, res) => {

}

//Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exist = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })

        }
    } catch (error) {

    }
}

export { loginUser, registerUser }
