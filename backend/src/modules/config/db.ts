import mongoose from "mongoose";
import { MONGO_URI } from "../../envValidation";

const connectDb = async () =>{
    try{

        if(!MONGO_URI){
            console.log("MONGO_URI is missing !");
            process.exit(1);
        }

         // Check if the URI looks correct in your terminal
        console.log(`📡 Attempting to connect to: ${MONGO_URI.substring(0, 20)}...`);

        await mongoose.connect(MONGO_URI);

        console.log("Connected with mongodb!");


    }catch(err){
        console.log("Error while connecting to mango", err);
        process.exit(1);
    }
}

export default connectDb;