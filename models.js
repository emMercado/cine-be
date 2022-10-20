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
    "schedule": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
}

const Schedule = {
    "_id": ObjectId,
    "idMovie": ObjectId,
    "date": Date, //lunes 3 de octubre de 2022
    "date_time": Date, //21:00
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