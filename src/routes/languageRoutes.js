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
languageRoute.get("/", getLanguages);
// GET /language/:id
languageRoute.get("/:id", getLanguageById);
// POST /language
languageRoute.post("/registerLanguage", registerLanguage);
// PUT /language/:id
languageRoute.put("/:id", updateLanguage);
// DELETE /language/:id
languageRoute.delete("/:id", deleteLanguage);