import mongoose from "mongoose";
import User from "./user.model.js";

const ExpenseSchema = new mongoose.Schema({
  date: { type: String, required: true },
  item: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Other"],
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense