import express from "express";
import { getSubstitutes } from "../controllers/substituteController.js";

const router = express.Router();

// POST /api/substitutes
router.post("/", getSubstitutes);

export default router;
