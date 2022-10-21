/* import dotenv from 'dotenv';
dotenv.config(); */
import express from "express";
import './util/secrets.js'
import { movieRoute } from './routes/movieRoutes.js'
import { protagonistRoute } from './routes/protagonistRoutes.js'
import { genreRoute } from './routes/genreRoutes.js'
import { languageRoute } from './routes/languageRoutes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to person application." });
});

//Routes
app.use("/api/movie/", movieRoute);
app.use("/api/protagonist/", protagonistRoute);
app.use("/api/genre/", genreRoute);
app.use("/api/language/", languageRoute);

//Welcome
app.get("/", (req, res) => {
    res.send("API cine");
});

const PORT = process.env.PORT || 3001;
// API execution
app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}.`);
    } catch (error) {
        console.error("Fail server run", error);
    }
});