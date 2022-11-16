require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Doctor = require("../models/doctor");

module.exports = {
  getAllDoctor: async (req, res) => {
    try {
      const doctors = await Doctor.find({}, "-__v")
      
      res.status(200).json({
        message: "Getting Data",
        data: doctors
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  getDoctorByID: async (req, res) => {    
    try {
      const doctors = await Doctor.findById(req.params.id, "-__v")

      if(!doctors){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      res.status(200).json({
        message: "You Searched for",
        data: doctors
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  registerDoctor: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash

    const doctor = new Doctor(data)

    doctor.save()
    res.status(201).json({
      message: "Succes Register!",
    })
  },

  deleteDoctorByID: async (req, res) => {
    try {
      const doctors = await Doctor.findById(req.params.id, "-__v")

      if(!doctors){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      doctors.deleteOne()
      res.status(201).json(
        {message: "Data Deleted"
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updateDoctorByID: async (req, res) => {
    try {
      const doctors = await Doctor.findById(req.params.id, "-__v")
      const data = req.body

      const saltRounds = 10
      const hash = bcrypt.hashSync(data.password, saltRounds);
      data.password = hash

      Object.assign(doctors, req.body)
      doctors.save();
      res.status(201).send({ 
        message : "Doctors updated!",
        data : doctors })
   
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  doctorLogin: async (req, res) => {
    const data = req.body
    const doctor = await Doctor.findOne({email: data.email})
    const id = doctor._id
    const isValid = bcrypt.compareSync(data.password, doctor.password)
    const token = jwt.sign({doctor}, process.env.DOCTOR_KEY)

    if (isValid) {
      res.header('doctor-token',token,id).status(200).json({
        message: "Login Succesfull!",
        token,
        id
      })
    } else {
      res.status(400).json({
        message: "Wrong Password or Email",
      })
    }

  }
}