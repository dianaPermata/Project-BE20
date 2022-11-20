require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const user = await User.find({}, "-__v")

            res.status(200).json({
                message: "Getting Data",
                data: user
            })
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    getUserByID: async (req, res) => {
        const id = req.params
        try {
            const user = await User.findById(id, "-__v")

            if (!user) {
                res.status(404).json({
                    message: "Could not Found"
                });
            } else {
                res.status(200).json({
                    message: "You Searched for",
                    data: user
                })
            }
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    registerUser: (req, res) => {
        try {
            const data = req.body 
            const saltRounds = 10
            const hash = bcrypt.hashSync(data.password, saltRounds);
            data.password = hash

    res.status(200).send(user);
} catch (error) {
  res.status(400).send(error);
}
    },

    deleteUserByID: async (req, res) => {
        const id = req.params
        try {
            const user = await User.findById(id, "-__v")

            if (!user) {
                res.status(404).json({
                    message: "Could not Found"
                });
            } else {
                user.deleteOne()
                res.status(201).json(
                    {
                        message: "Data Deleted"
                    })
            }
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    updateUserByID: async (req, res) => {
        const id = req.params
        try {
            const user = await User.findById(id, "-__v")

            Object.assign(users, req.body)
            user.save();
            res.status(201).send({
                message: "User updated!",
                data: user
            })
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    xcfn}, 

    userLogin: async (req, res) => {
        const data = req.body
        const user = await User.findOne({ email: data.email })
        const checkPwd = bcrypt.compareSync(data.password, user.password)
        const token = jwt.sign({ user }, process.env.DOCTOR_KEY)

        if (checkPwd) {
            res.header('user-token', token).status(200).json({
                message: "Login Succesfull!",
                token
            })
        } else {
            res.status(400).json({
                message: "Wrong Password or Email",
            })
        }
    }
}