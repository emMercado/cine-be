import Language from "../models/Language.js";
import Movie from "../models/Movie.js";

export const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find({});

    return res.json({ status: res.status, data: languages });
  } catch (error) {
    console.error(error);
  }
};

export const registerLanguage = async (req, res) => {
  try {
    const { body } = req;
    const newLanguage = await Language.create(body);

    return res.json({ status: res.status, data: newLanguage });
  } catch (error) {
    console.error(error);
  }
};

export const getLanguageById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const language = await Language.findOne({ _id });

    return res.json({ status: res.status, data: language });
  } catch (error) {
    console.error(error);
  }
};

export const updateLanguage = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const language = await Language.updateOne(filter, query);

    return res.json({ status: res.status, data: language });
  } catch (error) {
    res.status(500).send("Error al modificar lenguaje" + error);
    console.error(error);
  }
};

export const deleteLanguage = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const languageInMovie = await Movie.find({ languages: { $in: [_id] } });

    if (languageInMovie.length) {
      throw new Error(
        "No se pudo eliminar por estar vinculado con una pelicula"
      );
    }

    const deleteLanguage = await Language.deleteOne({ _id });

    if (!deleteLanguage) {
      return;
    }

    console.info("Idioma eliminado con exito");
    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar lenguaje" + error);
    console.error(error);
  }
};
