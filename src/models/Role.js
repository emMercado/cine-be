import mongoose, { model } from 'mongoose'

const roleSchema = mongoose.Schema({
    type: { type: String, required: false },
    isDefault: { type: Boolean, required: false }
})

export default model("Role", roleSchema);