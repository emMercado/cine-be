import Schedule from "../models/Schedule.js";
import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  try {
    //const tickets = await Ticket.find({}).populate("schedule")
    const tickets = await Ticket.find({}).populate({
      path: "schedule",
      populate: {
        path: "movie",
        model: "Movie",
      },
      populate: "room",
    });

    return res.json({ status: res.status, data: tickets });
  } catch (error) {
    console.error(error);
  }
};

export const registerTicket = async (req, res) => {
  try {
    const { body } = req;

    /* console.log(body); */

    /*  body.position.forEach(async (position) => {
      const newBody = {
        schedule: body.schedule,
        position,
        pay_method: body.pay_method,
      };

      await Schedule.updateOne(
        {
          _id: body.schedule,
          "positions.row": position.row,
          "positions.col": position.col,
          "positions.busy": false,
        },
        {
          $set: { "positions.$.busy": true },
        }
      );

      await Ticket.create(newBody);
    }); */

    const newTicket = await Ticket.create(body);

    await Schedule.updateOne(
      {
        _id: body.schedule,
        "positions.row": body.position.row,
        "positions.col": body.position.col,
        "positions.busy": false,
      },
      {
        $set: { "positions.$.busy": true },
      }
    );

    return res.json({ status: res.status, data: newTicket });
    return res.json({
      status: res.status,
      data: "se creo el ticket con exito",
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const ticket = await Ticket.findOne({ _id });

    return res.json({ status: res.status, data: ticket });
  } catch (error) {
    console.error(error);
  }
};

export const updateTicket = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const ticket = await Ticket.updateOne(filter, query);

    return res.json({ status: res.status, data: ticket });
  } catch (error) {
    res.status(500).send("Error al modificar ticket" + error);
    console.error(error);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Ticket.deleteOne({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar ticket" + error);
    console.error(error);
  }
};
