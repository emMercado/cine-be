import express from "express";
import {
  getRoles,
  registerRole,
  deleteRole,
  getRoleById,
  updateRole,
} from "../controllers/roleController.js";

export const roleRoute = express.Router();

// GET /role
roleRoute.get("/", getRoles);
// GET /role/:id
roleRoute.get("/:id", getRoleById);
// POST /role
roleRoute.post("/registerRole", registerRole);
// PUT /role/:id
roleRoute.put("/:id", updateRole);
// DELETE /role/:id
roleRoute.delete("/:id", deleteRole);
