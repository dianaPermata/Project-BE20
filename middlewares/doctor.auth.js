require('dotenv').config();
const jwt = require('jsonwebtoken');

const doctorAuth = (req, res, next) => {
    const token = req.header('doctor-token')
    if(!token) return res.status(400).json({
        status : res.statusCode,
        message : "Access Denied!"
    })
    try{
        const verified = jwt.verify(token, process.env.DOCTOR_KEY)
        req.doctor = verified 

    }catch(err){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        })
    }
    next()
}
module.exports = doctorAuth
