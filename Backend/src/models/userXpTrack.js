import mongoose from "mongoose";

const expTracker = new mongoose.Schema({
  date: { type: String, required: true },
  item: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Food", "Travel", "Shopping", "Bills", "Other"],
    required: true,
  },
});

