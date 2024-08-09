import express from 'express';
import cors from 'cors';


// app config 
const app = express();
const PORT = 4000;

// middle ware 
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

