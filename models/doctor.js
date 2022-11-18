const mongoose = require('mongoose');
const { Schema } = mongoose

const doctorSchema = new Schema({
  name: {
    type:String,
    required:[true, "Name is Required"],
},
  email: {
    type: String,
    required: [true, "Email is Required"],
},
  password: {
    type: String,
    required: [true, "Password is Required"],
    min:[8, "Must be at Least 6 Characters!"]
},
  hospital: String,
  alumnus: String,
  cost: Number,
  biography: String
})

const Doctor = mongoose.model("Doctor", doctorSchema)

module.exports = Doctor