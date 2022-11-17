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

    console.info("Horario creado con exito");
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

    console.info("Horario actualizado con exito");
    return res.json({ status: res.status, data: schedule });
  } catch (error) {
    res.status(500).send("Error al modificar schedule" + error);
    console.error(error);
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const scheduleInTicket = await Ticket.find({ schedule: { $in: [_id] } });

    if (scheduleInTicket.length) {
      throw new Error("No se pudo eliminar por estar vinculado con tickets");
    }

    const deleteSchedule = await Schedule.deleteOne({ _id });

    if (!deleteSchedule) {
      return;
    }

    console.info("Horario eliminado con exito");
    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar schedule" + error);
    console.error(error);
  }
};
