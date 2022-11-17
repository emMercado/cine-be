import mongoose, { model } from "mongoose";

const genreSchema = mongoose.Schema({
  name: { type: String, required: true },
});

export default model("Genre", genreSchema);
