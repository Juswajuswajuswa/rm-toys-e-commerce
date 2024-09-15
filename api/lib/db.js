import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO)
        console.log(process.env.MONGO)
        console.log("MongoDB connected: " + connect.connection.host)
    } catch (error) {
        console.log(`Error connecting to MONGODB ${error}`)
        process.exit(1)
    }
}