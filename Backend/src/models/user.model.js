import mongoose from "mongoose";

const userCred = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {timestamps: true});

const User = mongoose.model("User", userCred)

export default User