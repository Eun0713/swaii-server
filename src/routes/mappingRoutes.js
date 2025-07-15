import express from "express";
import { saveMappingController } from "../controllers/mappingController.js";

const router = express.Router();

router.post("/", saveMappingController);

export default router;
