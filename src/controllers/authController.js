/* import * as dotenv from "dotenv";
dotenv.config(); */
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/* export const register = async (req, res) => {
  const passwordHashed = await bcrypt.hash(req.body.password, 8);
  const newUser = await User.create({
    usuario: req.body.usuario,
    password: passwordHashed,
    personaId: 1,
  });
  res.send("User creada con exito", newUser);
}; */

export const login = async (req, res) => {
  const cuenta = await User.findOne({ where: { usuario: req.body.usuario } });
  if (!cuenta) {
    res.send("Usuario o contraseña inválida");
    return;
  }
  const passwordCompared = await bcrypt.compare(
    req.body.password,
    cuenta.password
  );
  if (!passwordCompared) {
    res.send("Usuario o contraseña inválida");
    return;
  }

  const payload = {
    usuario: cuenta.usuario,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({
    usuario: cuenta.usuario,
    token: token,
  });
};