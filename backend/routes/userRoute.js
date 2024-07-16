import express from "express";
import { getUser, searchUser } from "../controller/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getUser", protectRoute, getUser);
router.get('/searchUser', protectRoute, searchUser)

export default router;