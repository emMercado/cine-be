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
protagonistRoute.get("/", (req, res) => getProtagonists(req, res));
// GET /protagonist/:id
protagonistRoute.get("/:id", (req, res) => getProtagonistById(req, res));
// POST /protagonist
protagonistRoute.post("/registerProtagonist", (req, res) => registerProtagonist(req, res));
// PUT /protagonist/:id
protagonistRoute.put("/:id", (req, res) => updateProtagonist(req, res));
// DELETE /protagonist/:id
protagonistRoute.delete("/:id", (req, res) => deleteProtagonist(req, res));