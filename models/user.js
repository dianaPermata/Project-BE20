const mongoose = require("mongoose");
const { Schema } = mongoose
const validator = require("validator");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: [true, "Email is a required field"],
            trim: true,
            lowercase: true,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Please enter a valid E-mail!");
                }
            },
        },
        password: {
            type: String,
            required: [true, "Password is a required field"],
            validate(value) {
                if (!validator.isLength(value, { min: 6, max: 1000 })) {
                    throw Error("Length of the password should be between 6-1000");
                }

            }
        },

        phone: {
            type: String,
            required: [true, "Phone number is required !"],
            validate: {
                validator: (v) => {
                    return v.length == 12;
                },
                message: (props) => props.value + " Must be 12 digits !",
            },
        },
    })


const User = mongoose.model('User', userSchema);

module.exports = User;