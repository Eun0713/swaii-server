import express from "express";
import { saveGestureController } from "../controllers/gestureController.js";

const router = express.Router();

router.post("/", saveGestureController);

export default router;
