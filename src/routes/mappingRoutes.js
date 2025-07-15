import express from "express";
import {
  saveMappingController,
  getMappingsController,
  deleteMappingController,
} from "../controllers/mappingController.js";

const router = express.Router();

router.post("/", saveMappingController);
router.get("/", getMappingsController);
router.delete("/", deleteMappingController);

export default router;
