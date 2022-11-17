import mongoose, { model } from 'mongoose'

const protagonistSchema = mongoose.Schema({
    name: { type: String, required: true }, 
})

export default model("Protagonist", protagonistSchema);