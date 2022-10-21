import express from "express";
import {
    getGenres,
    registerGenre,
    deleteGenre,
    getGenreById,
    updateGenre,
} from "../controllers/genreController.js";

export const genreRoute = express.Router();

// GET /genre
genreRoute.get("/", getGenres);
// GET /genre/:id
genreRoute.get("/:id", getGenreById);
// POST /genre
genreRoute.post("/registerGenre", registerGenre);
// PUT /genre/:id
genreRoute.put("/:id", updateGenre);
// DELETE /genre/:id
genreRoute.delete("/:id", deleteGenre);