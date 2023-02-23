const jwt = require("jsonwebtoken");
const { UserService } = require("../service/index");

const ErrorCodes = require("../utils/statusCodes");
const ErrorResponse = require("../utils/error");

const asyncHandler = require("../utils/asyncHandler");


const isValidUser = asyncHandler(async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        throw new ErrorResponse(
            "Token is missing",
            ErrorCodes.BAD_REQUESET
        );
    }
    const object = jwt.verify(token, "This is my secreate key");
    const userRecord = await UserService.getUser(object.id);
    if (!userRecord) {
        throw new ErrorResponse(
            "No user exist for corrosponding token",
            ErrorCodes.BAD_REQUESET
        );
    }
    req.user = userRecord;
    req.userId = userRecord._id;
    next();
});

module.exports = isValidUser;
