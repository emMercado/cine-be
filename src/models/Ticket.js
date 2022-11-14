import mongoose, { model } from 'mongoose'

/*En schedule tenemos 
    room: numero sala
    movie: pelicula
    horario
*/

const ticketSchema = mongoose.Schema({
    //room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
    position: { row: { type: String }, col: { type: Number } },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pay_method: { type: String },
    price: { type: Number },
    date: { type: Date } //tiempo venta
})

export default model("Ticket", ticketSchema);