import express from "express";
import { getMsg, sendMsg } from "../controller/msg.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();
router.post("/send/:id", secureRoute, sendMsg);
router.get("/get/:id", secureRoute, getMsg);

export default router;
