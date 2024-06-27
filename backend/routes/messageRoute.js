import express from "express";
import { getMessage, sendMessage } from "../controller/messageController.js";
import protectRoute from "../middleware/protectRoute.js";


const router=express.Router();


router.post("/send/:id",protectRoute,sendMessage);
router.get("/getChat/:id",protectRoute,getMessage);


export default router;