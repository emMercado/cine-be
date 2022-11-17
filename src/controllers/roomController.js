import Room from "../models/Room.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});

    return res.json({ status: res.status, data: rooms });
  } catch (error) {
    console.error(error);
  }
};

export const registerRoom = async (req, res) => {
  try {
    const { body } = req;
    const newRoom = await Room.create(body);

    return res.json({ status: res.status, data: newRoom });
  } catch (error) {
    console.error(error);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const room = await Room.findOne({ _id });

    return res.json({ status: res.status, data: room });
  } catch (error) {
    console.error(error);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const room = await Room.updateOne(filter, query);

    return res.json({ status: res.status, data: room });
  } catch (error) {
    res.status(500).send("Error al modificar room" + error);
    console.error(error);
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Room.delete({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar room" + error);
    console.error(error);
  }
};
