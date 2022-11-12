import mongoose, { model } from "mongoose";

/*En schedule tenemos 
    room: numero sala
    movie: pelicula
    horario
*/

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

export default model("Ticket", userSchema);
