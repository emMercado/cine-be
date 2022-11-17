import Movie from "../models/Movie.js";
import Protagonist from "../models/Protagonist.js";

export const getProtagonists = async (req, res) => {
  try {
    const protagonists = await Protagonist.find({});

    return res.json({ status: res.status, data: protagonists });
  } catch (error) {
    console.error(error);
  }
};

export const registerProtagonist = async (req, res) => {
  try {
    const { body } = req;
    const newProtagonist = await Protagonist.create(body);

    return res.json({ status: res.status, data: newProtagonist });
  } catch (error) {
    console.error(error);
  }
};

export const getProtagonistById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const protagonist = await Protagonist.findOne({ _id });

    return res.json({ status: res.status, data: protagonist });
  } catch (error) {
    console.error(error);
  }
};

export const updateProtagonist = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const protagonist = await Protagonist.updateOne(filter, query);

    return res.json({ status: res.status, data: protagonist });
  } catch (error) {
    res.status(500).send("Error al modificar protagonista" + error);
    console.error(error);
  }
};

export const deleteProtagonist = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const protagonistInMovie = await Movie.find({ protagonists: { $in: [_id] } });

    if (protagonistInMovie.length) {
      throw new Error(
        "No se pudo eliminar por estar vinculado con una pelicula"
      );
    }

    const deleteProtagonist = await Protagonist.deleteOne({ _id });

    if (!deleteProtagonist) {
      return;
    }

    console.info("Genero eliminado con exito");

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar protagonista" + error);
    console.error(error);
  }
};
