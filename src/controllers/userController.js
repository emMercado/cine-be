import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("role");

    return res.json({ status: res.status, data: users });
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { body } = req;
    const passwordHashed = await bcrypt.hash(body.password, 8);

    body.password = passwordHashed;
    body.date = new Date();

    const newUser = await User.create(body);

    return res.json({ status: res.status, data: newUser });
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const user = await User.findOne({ _id });

    return res.json({ status: res.status, data: user });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const user = await User.updateOne(filter, query);

    return res.json({ status: res.status, data: user });
  } catch (error) {
    res.status(500).send("Error al modificar user" + error);
    console.error(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await User.deleteOne({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar user" + error);
    console.error(error);
  }
};
