import express from "express";
import {
  saveMappingController,
  getMappingsController,
  deleteMappingController,
  updateMappingController,
} from "../controllers/mappingController.js";

const router = express.Router();

router.post("/", saveMappingController);
router.get("/", getMappingsController);
router.delete("/", deleteMappingController);
router.patch("/", updateMappingController);

export default router;
