import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('').then(() => {
        console.log('DB connected');
    }).catch((error) => {
        console.log(error);
        console.log('DB connection failed');
    })
}
