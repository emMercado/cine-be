import mongoose, { model } from "mongoose";

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  direction: { type: String, required: false },
  protagonists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Protagonist" }],
  producer: { type: String, required: false },
  date_premiere: { type: Date, required: true },
  duration: { type: Number, required: true },
  languages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Language" }],
  img: { type: String, required: false },
});

export default model("Movie", movieSchema);
