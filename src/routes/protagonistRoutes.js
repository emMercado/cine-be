import express from "express";
import {
    getProtagonists,
    registerProtagonist,
    deleteProtagonist,
    getProtagonistById,
    updateProtagonist,
} from "../controllers/protagonistController.js";

export const protagonistRoute = express.Router();

// GET /protagonist
protagonistRoute.get("/", getProtagonists);
// GET /protagonist/:id
protagonistRoute.get("/:id", getProtagonistById);
// POST /protagonist
protagonistRoute.post("/registerProtagonist", registerProtagonist);
// PUT /protagonist/:id
protagonistRoute.put("/:id", updateProtagonist);
// DELETE /protagonist/:id
protagonistRoute.delete("/:id", deleteProtagonist);