import mongoose, { model } from "mongoose";

const roleSchema = mongoose.Schema({
  name: { type: String, required: true },
});

export default model("Role", roleSchema);
