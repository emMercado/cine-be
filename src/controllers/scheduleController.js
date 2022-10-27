import Schedule from "../models/Schedule.js";

export const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find({}).populate("movie")

        return res.json({ status: res.status, data: schedules });
    } catch (error) {
        console.error(error);
    }
};

export const registerSchedule = async (req, res) => {
    try {
        const { body } = req
        const newSchedule = await Schedule.create(body);

        return res.json({ status: res.status, data: newSchedule });
    } catch (error) {
        console.error(error);
    }
};

export const getScheduleById = async (req, res) => {
    try {
        const { id: _id } = req.params
        const schedule = await Schedule.findOne({ _id })

        return res.json({ status: res.status, data: schedule });
    } catch (error) {
        console.error(error);
    }
};

export const updateSchedule = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const query = { $set: req.body }

        const schedule = await Schedule.updateOne(filter, query);

        return res.json({ status: res.status, data: schedule });
    } catch (error) {
        res.status(500).send("Error al modificar schedule" + error)
        console.error(error);
    }
};

export const deleteSchedule = async (req, res) => {
    try {
        const { id: _id } = req.params
        await Schedule.deleteOne({ _id });

        return res.json({ status: res.status });
    } catch (error) {
        res.status(500).send("Error al eliminar schedule" + error)
        console.error(error);
    }
};