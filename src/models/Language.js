import mongoose, { model } from 'mongoose'

const languageSchema = mongoose.Schema({
    name: { type: String, required: false },
})

export default model("Language", languageSchema);