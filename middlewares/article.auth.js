require('dotenv').config();
const jwt = require('jsonwebtoken');
const Article = require("../models/article");


const articleAuth = async (req, res, next) => {
    const token = req.header('doctor-token')
    if(!token) 
    return res.status(403).json({
        status : res.statusCode,
        message : "Access Denied!"
    });
    
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        const article = await Article.findById(req.params.id, "-__v")
        // console.log(verified.doctor._id);
        if (!verified) {
            res.status(401).send({
              message: "Unauthorized!",
            });
          }else if(verified.doctor._id != article.writter_id){
          return res.status(403).json({
              status : res.statusCode,
              message : "Forbidden!"
          }); //Checks doctor's id currently logged in is the same as req.params.id
        }else
          next()
    }catch(error){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        });
    }
}

module.exports = articleAuth