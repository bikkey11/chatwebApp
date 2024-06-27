import express from "express";
import {getUser} from "../controller/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/getUser",protectRoute,getUser);

export default router;