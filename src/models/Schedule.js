import mongoose, { model } from 'mongoose'

const scheduleSchema = mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    date: { type: Date }, //lunes 3 de octubre de 2022
    /* date_time: { type: mongoose.Schema.Types.Date }, //21:00 */
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    /* tickets: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' } */
})

export default model("Schedule", scheduleSchema);