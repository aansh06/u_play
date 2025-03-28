// database connection 


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// connectDB function is an asynchronous function that attempts to establish a connection to a MongoDB database using Mongoose
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB