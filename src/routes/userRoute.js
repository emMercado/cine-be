import express from "express";
import {
    getTickets,
    registerTicket,
    deleteTicket,
    getTicketById,
    updateTicket,
} from "../controllers/userController.js";

export const userRoute = express.Router();

// GET /user
userRoute.get("/", getTickets);
// GET /user/:id
userRoute.get("/:id", getTicketById);
// POST /user
userRoute.post("/registerTicket", registerTicket);
// PUT /user/:id
userRoute.put("/:id", updateTicket);
// DELETE /user/:id
userRoute.delete("/:id", deleteTicket);