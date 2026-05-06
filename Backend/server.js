import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import auth from "./src/routes/auth.routes.js";
import expense from "./src/routes/expense.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({
  origin: process.env.VITE_API_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});

app.use("/api", auth);
app.use("/api/expense", expense);