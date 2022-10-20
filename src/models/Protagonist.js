import mongoose, { model } from 'mongoose'

const protagonistSchema = mongoose.Schema({
    name: { type: String, required: false }, 
})

export default model("Protagonist", protagonistSchema);