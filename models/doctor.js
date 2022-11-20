const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
  name: String,
  email: String,
  password: String,
  hospital: String,
  alumnus: String,
  cost: Number,
  phone: String,
  biography: String
})

const Doctor = mongoose.model("Doctor", doctorSchema)

module.exports = Doctor