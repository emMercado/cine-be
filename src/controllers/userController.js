import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
    try {
        //const tickets = await Ticket.find({}).populate("schedule")
        const tickets = await Ticket.find({}).populate({
            path: 'schedule',
            populate: {
                path: 'movie',
                model: 'Movie'
            }
        })

        return res.json({ status: res.status, data: tickets });
    } catch (error) {
        console.error(error);
    }
};

export const registerTicket = async (req, res) => {
    try {
        const { body } = req
        const newTicket = await Ticket.create(body);

        return res.json({ status: res.status, data: newTicket });
    } catch (error) {
        console.error(error);
    }
};

export const getTicketById = async (req, res) => {
    try {
        const { id: _id } = req.params
        const ticket = await Ticket.findOne({ _id })

        return res.json({ status: res.status, data: ticket });
    } catch (error) {
        console.error(error);
    }
};

export const updateTicket = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const query = { $set: req.body }

        const ticket = await Ticket.updateOne(filter, query);

        return res.json({ status: res.status, data: ticket });
    } catch (error) {
        res.status(500).send("Error al modificar ticket" + error)
        console.error(error);
    }
};

export const deleteTicket = async (req, res) => {
    try {
        const { id: _id } = req.params
        await Ticket.deleteOne({ _id });

        return res.json({ status: res.status });
    } catch (error) {
        res.status(500).send("Error al eliminar ticket" + error)
        console.error(error);
    }
};