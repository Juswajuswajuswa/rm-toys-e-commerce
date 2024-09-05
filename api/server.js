import express from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
// MONGODB
import { connectDb } from './lib/db.js';
//
import { handleError } from './middleware/handleError.js';
// ROUTES
import authRoute from '../api/routes/auth.route.js'


const app = express();
const PORT = process.env.PORT || 5000
configDotenv()
// to parse the request json to postman
app.use(express.json())
app.use(cookieParser())


// MAKING ROUTERS
app.use(`/api/auth`, authRoute)



// MIDDLEWARE HANDLE ERROR
app.use(handleError)

app.listen(PORT, () => {
    connectDb()
    console.log(`Server running on ${PORT}`)
})

