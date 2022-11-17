import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  date: { type: Date },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

export default model("User", userSchema);