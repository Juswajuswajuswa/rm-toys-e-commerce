import express from 'express'
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

// ROUTES
import authRoute from '../api/routes/auth.route.js'



const app = express();
const PORT = process.env.PORT || 5000
configDotenv()
// to parse the request json to postman
app.use(express.json())



// MAKING ROUTERS
app.use(`api/auth`, authRoute)

const connect = () => {
    mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to the MongoDB")
    })
    .catch((error) => {
        console.log(error)
    })
}

app.listen(PORT, () => {
    connect()
    console.log(`Server running on ${PORT}`)
})