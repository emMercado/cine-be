import mongoose, { model } from "mongoose";

/*En schedule tenemos 
    room: numero sala
    movie: pelicula
    horario
*/

const userSchema = mongoose.Schema({
  username: {type: String},
  name: {type: String},
  email: {type: String},
  password: {type: String},
  confirmPasword: {type: String},
  //date: String,123
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});



export default model("User", userSchema);
