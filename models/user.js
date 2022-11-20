const mongoose = require("mongoose");
const { Schema } = mongoose
const validator = require("validator");

const userSchema = new Schema(
    {
        nama: String,
        email: String,
        password: String,
        phone: Number,
    })


const User = mongoose.model('User', userSchema);

module.exports = User;