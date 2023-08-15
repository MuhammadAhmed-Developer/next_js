// import mongoose from "mongoose";
// import handler from "../pages/api/hello";

// const connectDb = handler => async (req, res) =>{
  
//     if(mongoose.connections[0].readyState){
//         return handler(req, res)
//     }
//     await mongoose.connect('mongodb+srv://muhammadahmedite:ahmed098@cluster0.ncnlttz.mongodb.net/')
//     //  console.log(process.env.MONGO_URI)
//      return handler(req,res)
// }

// export default connectDb
const mongoose = require('mongoose')

// connect to mongoDB

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('database connection error', error)
        process.exit(1)
    }
}

export default connectDB