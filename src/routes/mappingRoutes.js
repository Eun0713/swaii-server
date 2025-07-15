import express from "express";
import {
  saveMappingController,
  getMappingsController,
} from "../controllers/mappingController.js";

const router = express.Router();

router.post("/", saveMappingController);
router.get("/", getMappingsController);

export default router;
