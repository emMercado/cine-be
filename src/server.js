/* import dotenv from 'dotenv';
dotenv.config(); */
import express from "express";
import "./util/secrets.js";
import cors from "cors";
import { movieRoute } from "./routes/movieRoutes.js";
import { protagonistRoute } from "./routes/protagonistRoutes.js";
import { genreRoute } from "./routes/genreRoutes.js";
import { languageRoute } from "./routes/languageRoutes.js";
import { roomRoute } from "./routes/roomRoutes.js";
import { scheduleRoute } from "./routes/scheduleRoutes.js";
import { ticketRoute } from "./routes/ticketRoutes.js";
import { authRouter } from "./routes/authRoutes.js";
import { userRoute } from "./routes/userRoutes.js";

const app = express();

import "./auth/auth.js";
import { roleRoute } from "./routes/roleRoutes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to person application." });
});

//Routes
app.use("/api/auth", authRouter);
app.use("/api/movie/", movieRoute);
app.use("/api/protagonist/", protagonistRoute);
app.use("/api/genre/", genreRoute);
app.use("/api/language/", languageRoute);
app.use("/api/room/", roomRoute);
app.use("/api/schedule/", scheduleRoute);
app.use("/api/ticket/", ticketRoute);
app.use("/api/user/", userRoute);
app.use("/api/role/", roleRoute);

/* chargePoints(); */

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
