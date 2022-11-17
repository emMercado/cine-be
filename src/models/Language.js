import mongoose, { model } from 'mongoose'

const languageSchema = mongoose.Schema({
    name: { type: String, required: true },
})

export default model("Language", languageSchema);