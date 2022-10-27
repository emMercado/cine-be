import mongoose, { model } from 'mongoose'

const roomSchema = mongoose.Schema({
    number: { type: Number, required: false },
    //schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }],
})

export default model("Room", roomSchema);