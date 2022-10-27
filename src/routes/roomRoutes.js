import express from "express";
import {
    getRooms,
    registerRoom,
    deleteRoom,
    getRoomById,
    updateRoom,
} from "../controllers/roomController.js";

export const roomRoute = express.Router();

// GET /room
roomRoute.get("/", getRooms);
// GET /room/:id
roomRoute.get("/:id", getRoomById);
// POST /room
roomRoute.post("/registerRoom", registerRoom);
// PUT /room/:id
roomRoute.put("/:id", updateRoom);
// DELETE /room/:id
roomRoute.delete("/:id", deleteRoom);