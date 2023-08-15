import mongoose from "mongoose";
import handler from "../pages/api/hello";

const connectDb = handler => async (req, res) =>{
  
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    // await mongoose.connect('mongodb+srv://muhammadahmedite:ahmed098@cluster0.ncnlttz.mongodb.net/')
    //  console.log(process.env.MONGO_URI)
     return handler(req,res)
}

export default connectDb