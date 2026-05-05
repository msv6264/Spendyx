import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log('Error in connecting to DB ', error);
  }
}
