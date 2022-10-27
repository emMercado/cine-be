import mongoose from "mongoose";

const Movie = {
    "_id": ObjectId,
    "title": String,
    "is3d": Boolean,
    "genres": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    "direction": String,
    "protagonists": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Protagonist' }],
    "producer": String,
    "date_premiere": Date,
    "duration": Number,
    "language": { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    "img": String
}

const Genre = {
    "_id": ObjectId,
    "name": String
}

const Protagonist = {
    "_id": ObjectId,
    "name": String
    //otro dato ?? fecha nac, photo, movies, etc
}

const Language = {
    "_id": ObjectId,
    "name": String
}

const Room = {
    "_id": ObjectId,
    "number": Number,
    /* "schedule": [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }
        {
            movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
            date: Date, //lunes 3 de octubre de 2022
            date_time: Date, //21:00
            tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }]
        }
    ], */
}


const Schedule = {
    "_id": ObjectId,
    "movie": { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    "date": Date, //lunes 3 de octubre de 2022
    "date_time": Date, //21:00
    "room": { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    /*  "tickets": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] */
}

const Ticket = {
    "_id": ObjectId,
    "schedule": { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
    "position": { row: String, col: Number },
    "seller": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    "pay_method": String,
    "price": Number,
    "date": Date,
}

const User = {
    "_id": ObjectId,
    "name": String,
    "username": String,
    "email": String,
    "password": String,
    "date": String,
    "role": { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
}

const Role = {
    "_id": ObjectId,
    "name": String,
}