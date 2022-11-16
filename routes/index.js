const express = require('express');
const router = express.Router()

const doctorRouter = require('./doctor.router');

router.use("/doctor" ,doctorRouter)

module.exports = router