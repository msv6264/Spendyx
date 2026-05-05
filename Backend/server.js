import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import auth from "./src/routes/auth.routes.js"

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});

app.use("/api", auth);