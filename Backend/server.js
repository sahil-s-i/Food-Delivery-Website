import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


// app config 
const app = express();
const PORT = 4000;

// middle ware 
app.use(express.json())
app.use(cors())

// DB Connection 
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'));

app.get("/", (req, res) => {
    res.send("API working ,,,, hello world")
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})
