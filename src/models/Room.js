import mongoose, { model } from "mongoose";

const roomSchema = mongoose.Schema({
  number: { type: Number, required: true },
});

export default model("Room", roomSchema);
