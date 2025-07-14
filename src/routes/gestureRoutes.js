import express from "express";
import {
  saveGestureController,
  getGesturesController,
} from "../controllers/gestureController.js";

const router = express.Router();

router.post("/", saveGestureController);
router.get("/", getGesturesController);

export default router;
