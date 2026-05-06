import express from "express";
import { getAllExpenses, createExpense, deleteExpenseById, updateExpenseById } from "../controllers/expense.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllExpenses);
router.post("/create", authMiddleware, createExpense);
router.post("/update/:id", authMiddleware, updateExpenseById);
router.post("/delete/:id", authMiddleware, deleteExpenseById);

export default router;