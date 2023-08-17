import mongoose from "mongoose";

const connectMongodb = () =>{
     try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongodb");
     } catch (error) {
        console.log(error);
     }
}

export default connectMongodb 