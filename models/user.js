const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    nama: {
        type:String,
        required:[true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        min:[8, "must be at least 6 characters."],
    },
    jenis_kelamin: String,
    no_telepon: Number,
})

const User = mongoose.model("User", userSchema)

module.exports = User