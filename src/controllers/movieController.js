import Movie from "../models/Movie.js";

export const getMovies = async (_, res) => {
    try {
        const movies = await Movie.find({})
            .populate("genres")
            .populate("protagonists")
            .populate("language");

        return res.json({ status: res.status, data: movies });
    } catch (error) {
        console.error(error);
    }
};

export const registerMovie = async (req, res) => {
    try {
        const { body } = req
        const newMovie = await Movie.create(body);

        return res.json({ status: res.status, data: newMovie });
    } catch (error) {
        console.error(error);
    }
};

export const getMovieById = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const movie = 
            await Movie.findOne({ _id })
                .populate("genre")
                .populate("protagonist")
                .populate("language");

        return res.json({ status: res.status, data: movie });
    } catch (error) {
        console.error(error);
    }
};

export const updateMovie = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const query = { $set: req.body }

        const movie = await Movie.updateOne(filter, query);

        return res.json({ status: res.status, data: movie });
    } catch (error) {
        res.status(500).send("Error al modificar pelicula" + error)
        console.error(error);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const { id: _id } = req.params
        await Movie.deleteOne({ _id });

        return res.json({ status: res.status });
    } catch (error) {
        res.status(500).send("Error al eliminar pelicula" + error)
        console.error(error);
    }
};