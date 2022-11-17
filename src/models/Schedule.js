import mongoose, { model } from "mongoose";

const scheduleSchema = mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  date: { type: Date },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  positions: [
    { row: { type: String }, col: { type: Number }, busy: { type: Boolean } },
  ],
});

export default model("Schedule", scheduleSchema);
