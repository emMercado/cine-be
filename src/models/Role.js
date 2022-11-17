import mongoose, { model } from "mongoose";

const roleSchema = mongoose.Schema({
  name: { type: String, required: false },
});

export default model("Role", roleSchema);
