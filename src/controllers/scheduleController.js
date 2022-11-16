import Schedule from "../models/Schedule.js";
import Ticket from "../models/Ticket.js";
import { chargePoints } from "../util/positions.helper.js";

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find({})
      .populate("movie")
      .populate("room");
    console.info("Consulta de horarios");
    return res.json({ status: res.status, data: schedules });
  } catch (error) {
    console.error(error);
  }
};

export const registerSchedule = async (req, res) => {
  try {
    const { body } = req;

    body.positions = chargePoints();

    const newSchedule = await Schedule.create(body);

    console.info("Se registro un nuevo horario");
    return res.json({ status: res.status, data: newSchedule });
  } catch (error) {
    console.error(error);
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const schedule = await Schedule.findOne({ _id })
      .populate("movie")
      .populate("room");

    return res.json({ status: res.status, data: schedule });
  } catch (error) {
    console.error(error);
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const schedule = await Schedule.updateOne(filter, query);

    return res.json({ status: res.status, data: schedule });
  } catch (error) {
    res.status(500).send("Error al modificar schedule" + error);
    console.error(error);
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Schedule.deleteOne({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar schedule" + error);
    console.error(error);
  }
};
