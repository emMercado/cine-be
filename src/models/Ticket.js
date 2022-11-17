import mongoose, { model } from 'mongoose'

const ticketSchema = mongoose.Schema({
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
    position: { row: { type: String }, col: { type: Number } },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pay_method: { type: String },
    price: { type: Number },
    date: { type: Date }
})

export default model("Ticket", ticketSchema);