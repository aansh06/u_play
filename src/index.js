//require('dotenv').config({path: './env'})
import dotenv from "dotenv"



import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()  // db connection approach 2

/*   DB connectionn approach 1

const mongoose = require('mongoose');
import { DB_NAME } from "./constants";

import express from "express";
import { DB_NAME } from "./constants";
const app = express()



( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
        
    }
})()

*/


