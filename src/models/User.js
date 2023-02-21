const validator = require("validator");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100,
    },

}, {
    timestamps: true
});

const userModel = mongoose.Model("User", userSchema, "users");
module.exports = userModel;