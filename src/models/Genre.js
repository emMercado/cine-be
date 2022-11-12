import mongoose, { model } from 'mongoose'

const genreSchema = mongoose.Schema({
    name: { type: String, required: false }, 
})

export default model("Genre", genreSchema);