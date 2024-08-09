import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';


// app config 
const app = express();
const PORT = 4000;

// middle ware 
app.use(express.json())
app.use(cors())

// DB Connection 
connectDB();

app.get("/", (req, res) => {
    res.send("API working ,,,, hello world")
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})
