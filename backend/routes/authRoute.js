import express from "express";
import { Register, login, logout } from "../controller/authController.js"


const router = express.Router();

router.post("/login", login);
router.post("/register", Register);
router.post("/logout", logout);
export default router