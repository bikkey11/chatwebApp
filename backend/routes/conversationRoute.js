import express from "express";
import { getConversationList } from "../controller/conversationController.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();



router.get("/getConversationList", protectRoute, getConversationList);


export default router;