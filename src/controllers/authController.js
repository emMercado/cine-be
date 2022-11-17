/* import * as dotenv from "dotenv";
dotenv.config(); */
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const account = await User.findOne({
    username: req.body.username,
  });
  if (!account) {
    console.error("Usuario o contraseña inválida");
    res.send("Usuario o contraseña inválida");
    return;
  }
  const passwordCompared = await bcrypt.compare(
    req.body.password,
    account.password
  );
  if (!passwordCompared) {
    res.send("Usuario o contraseña inválida");
    return;
  }

  const payload = {
    username: account.username,
  };
  const token = jwt.sign(payload, "asflkoasjdlkasdasdjhasfasfasghhgas", {
    expiresIn: "2h",
  });
  res.json({
    username: account.username,
    token: token,
  });
};
