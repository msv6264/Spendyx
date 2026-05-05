import express from "express";
import { signUpUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", signUpUser);

export default router;
