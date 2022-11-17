import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

export default model("User", userSchema);
