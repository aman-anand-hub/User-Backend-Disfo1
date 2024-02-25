const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        firstname: { 
            type: String, 
            maxLength: 50, 
            default: "",
        }, 
        username: { 
            type: String, 
            maxLength: 25, 
            unique: true, 
            required: true,
        },
        email: {
            type: String,
            unique: true,
            validate: (value) => validator.isEmail(value),
            required: true,
        },
    }
)

const userModel = mongoose.model("UserData", userSchema );

module.exports = userModel;