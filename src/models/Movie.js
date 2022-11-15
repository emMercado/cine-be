import mongoose, { model } from "mongoose";

const movieSchema = mongoose.Schema({
  title: { type: String, required: false },
  is3d: { type: String, required: false },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  direction: { type: String, required: false },
  protagonists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Protagonist" }],
  producer: { type: String, required: false },
  date_premiere: { type: Date, required: false },
  duration: { type: Number, required: false },
  languages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Language" }],
  img: { type: String, required: false },
});

export default model("Movie", movieSchema);
