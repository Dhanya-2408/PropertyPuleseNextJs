import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {

    if (connected) {
        console.log("Already connected to database");
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database: ", error);
    }
}

export default connectDB;