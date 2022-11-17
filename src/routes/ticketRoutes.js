import express from "express";
import {
  getTickets,
  registerTicket,
  deleteTicket,
  getTicketById,
  updateTicket,
  deleteAllTickets,
} from "../controllers/ticketController.js";

export const ticketRoute = express.Router();

// GET /ticket
ticketRoute.get("/", getTickets);
// GET /ticket/:id
ticketRoute.get("/:id", getTicketById);
// POST /ticket
ticketRoute.post("/registerTicket", registerTicket);
// PUT /ticket/:id
ticketRoute.put("/:id", updateTicket);
// DELETE /ticket/:id
ticketRoute.delete("/:id", deleteTicket);

ticketRoute.delete("/clean", deleteAllTickets);
