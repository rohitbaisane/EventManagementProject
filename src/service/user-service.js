const User = require("../models/user");

const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/error");

const jwt = require("jsonwebtoken");
const ErrorCodes = require("../utils/status-codes");

const createUser = async (data) => {
    const userRecord = await User.create(data);
    return userRecord;
}

const signIn = async (data) => {

    const { email, password } = data;
    //Check whether user exist for given email id or not.
    const userRecord = await getUserByEmail(email);

    if (!userRecord) {
        throw new ErrorResponse(
            "Email id  is wrong",
            ErrorCodes.BAD_REQUESET,
        );
    }

    if (userRecord.password != password) {
        throw new ErrorResponse(
            "Password is wrong",
            ErrorCodes.BAD_REQUESET,
        );
    }

    //create jwt token 
    const token = createJwtToken(userRecord);
    return token;
}

const getUser = async (userId) => {
    const userRecord = await User.findById(userId);
    return userRecord;
}

// UPDATE USER BY ID -> /user/:id
const updateUser = async (userId, data) => {
    const userRecord = await User.findByIdAndUpdate(userId, data, { new: true, runValidators: true });
    return userRecord;
}

// DELETE USER BY ID -> /user/:id
const deleteUser = async (userId) => {
    const userRecord = await User.findByIdAndRemove(userId);
    return userRecord;
}

async function getUserByEmail(email) {

    const userRecord = await User.findOne({ email });
    if (!userRecord) {
        throw new ErrorResponse(
            "Email id is wrong",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return userRecord;
}

function createJwtToken(user) {
    const token = jwt.sign({ id: user._id }, "This is my secreate key", { expiresIn: "8h" });
    return token;
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    signIn,
    getUserByEmail,
};