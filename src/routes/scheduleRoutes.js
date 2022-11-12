import express from "express";
import {
    getSchedules,
    registerSchedule,
    deleteSchedule,
    getScheduleById,
    updateSchedule,
} from "../controllers/scheduleController.js";

export const scheduleRoute = express.Router();

// GET /schedule
scheduleRoute.get("/", getSchedules);
// GET /schedule/:id
scheduleRoute.get("/:id", getScheduleById);
// POST /schedule
scheduleRoute.post("/registerSchedule", registerSchedule);
// PUT /schedule/:id
scheduleRoute.put("/:id", updateSchedule);
// DELETE /schedule/:id
scheduleRoute.delete("/:id", deleteSchedule);