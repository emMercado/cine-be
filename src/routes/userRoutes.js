import express from "express";
import {
  getUsers,
  registerUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

export const userRoute = express.Router();

// GET /user
userRoute.get("/", getUsers);
// GET /user/:id
userRoute.get("/:id", getUserById);
// POST /user
userRoute.post("/registerUser", registerUser);
// PUT /user/:id
userRoute.put("/:id", updateUser);
// DELETE /user/:id
userRoute.delete("/:id", deleteUser);
