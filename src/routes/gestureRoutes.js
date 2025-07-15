import express from "express";
import {
  saveGestureController,
  getGesturesController,
  deleteGestureController,
} from "../controllers/gestureController.js";

const router = express.Router();

router.post("/", saveGestureController);
router.get("/", getGesturesController);
router.delete("/", deleteGestureController);

export default router;
