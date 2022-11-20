require('dotenv').config();
const jwt = require('jsonwebtoken');

const articleAddAuth = (req, res, next) => {
    const token = req.header('doctor-token')
    if(!token) 
    return res.status(403).json({
        status : res.statusCode,
        message : "Access Denied!"
    });
    
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        if (!verified) {
            res.status(401).send({
              message: "Unauthorized!",
            });
          }
          next()
    }catch(error){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        });
    }
}

module.exports = articleAddAuth