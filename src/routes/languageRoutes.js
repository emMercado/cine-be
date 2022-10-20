import express from "express";
import {
    getLanguages,
    registerLanguage,
    deleteLanguage,
    getLanguageById,
    updateLanguage,
} from "../controllers/languageController.js";

export const languageRoute = express.Router();

// GET /language
languageRoute.get("/", (req, res) => getLanguages(req, res));
// GET /language/:id
languageRoute.get("/:id", (req, res) => getLanguageById(req, res));
// POST /language
languageRoute.post("/registerLanguage", (req, res) => registerLanguage(req, res));
// PUT /language/:id
languageRoute.put("/:id", (req, res) => updateLanguage(req, res));
// DELETE /language/:id
languageRoute.delete("/:id", (req, res) => deleteLanguage(req, res));