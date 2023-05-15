import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
