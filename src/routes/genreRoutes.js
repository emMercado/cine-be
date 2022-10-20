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
genreRoute.get("/", (req, res) => getGenres(req, res));
// GET /genre/:id
genreRoute.get("/:id", (req, res) => getGenreById(req, res));
// POST /genre
genreRoute.post("/registerGenre", (req, res) => registerGenre(req, res));
// PUT /genre/:id
genreRoute.put("/:id", (req, res) => updateGenre(req, res));
// DELETE /genre/:id
genreRoute.delete("/:id", (req, res) => deleteGenre(req, res));