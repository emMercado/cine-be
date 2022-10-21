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
movieRoute.get("/", getMovies);
// GET /movie/:id
movieRoute.get("/:id", getMovieById);
// POST /movie
movieRoute.post("/registerMovie", registerMovie);
// PUT /movie/:id
movieRoute.put("/:id", updateMovie);
// DELETE /movie/:id
movieRoute.delete("/:id", deleteMovie);