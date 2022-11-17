import express from "express";
import passport from "passport";
import { login /* register */ } from "../controllers/authController.js";

export const authRouter = express.Router();

// POST /register
/* authRouter.post("/register", register); */

// POST /login
authRouter.post("/login", login);

authRouter.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
