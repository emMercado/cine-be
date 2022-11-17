import Genre from "../models/Genre.js";
import Movie from "../models/Movie.js";

export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find({});

    console.info("Consulta generos");
    return res.json({ status: res.status, data: genres });
  } catch (error) {
    console.error(error);
  }
};

export const registerGenre = async (req, res) => {
  try {
    const { body } = req;
    const newGenre = await Genre.create(body);

    if (!newGenre) {
      throw new Error("No se pudo registrar");
    }

    console.info("Genero creado con exito");
    return res.json({ status: res.status, data: newGenre });
  } catch (error) {
    console.error(error);
  }
};

export const getGenreById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const genre = await Genre.findOne({ _id });

    return res.json({ status: res.status, data: genre });
  } catch (error) {
    console.error(error);
  }
};

export const updateGenre = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const genre = await Genre.updateOne(filter, query);

    return res.json({ status: res.status, data: genre });
  } catch (error) {
    res.status(500).send("Error al modificar genero" + error);
    console.error(error);
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const genreInMovie = await Movie.find({ genres: { $in: [_id] } });

    /* if (genreInMovie.length) {
      throw new Error(
        "No se pudo eliminar por estar vinculado con una pelicula"
      );
    } */

    const deleteGenre = await Genre.deleteOne({ _id });

    if (!deleteGenre) {
      return;
    }

    console.info("Genero eliminado con exito");
    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar genero" + error);
    console.error(error);
  }
};
