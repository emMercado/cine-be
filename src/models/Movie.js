import mongoose, { model } from 'mongoose'

const movieSchema = mongoose.Schema({
    title: { type: String, required: false },
    is3d: { type: String, required: false },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    direction: { type: String, required: false },
    protagonists: { type: String, required: false },
    producer: { type: String, required: false },
    year: { type: String, required: false },
    date_premiere: { type: String, required: false },
    duration: { type: Number, required: false },
    language: { type: String, required: false },
})

export default model("Movie", movieSchema);