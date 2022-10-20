import express from "express";
import {
    getMovies,
    registerMovie,
    deleteMovie,
    getMovieById,
    updateMovie,
} from "../controllers/movieController.js";

export const movieRoute = express.Router();

// GET /movie
movieRoute.get("/", (req, res) => getMovies(req, res));
// GET /movie/:id
movieRoute.get("/:id", (req, res) => getMovieById(req, res));
// POST /movie
movieRoute.post("/registerMovie", (req, res) => registerMovie(req, res));
// PUT /movie/:id
movieRoute.put("/:id", (req, res) => updateMovie(req, res));
// DELETE /movie/:id
movieRoute.delete("/:id", (req, res) => deleteMovie(req, res));