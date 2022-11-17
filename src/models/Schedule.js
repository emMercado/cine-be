import mongoose, { model } from "mongoose";

const scheduleSchema = mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  date: { type: Date, required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  positions: [
    { row: { type: String }, col: { type: Number }, busy: { type: Boolean } },
  ],
});

export default model("Schedule", scheduleSchema);
