const mongoose = require('mongoose');
const { Schema } = mongoose

const doctorSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: String,
  hospital: String,
  alumnus: String,
  cost: Number,
  biography: String
})

const Doctor = mongoose.model("Doctor", doctorSchema)

module.exports = Doctor