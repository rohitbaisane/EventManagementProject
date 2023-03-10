const { UserService } = require("../service/index");

const { checkMandatoryFields } = require("./common");

const asyncHandler = require("../utils/asyncHandler");

const getUser = asyncHandler(async (req, res) => {
    const id = req.userId;
    const userRecord = await UserService.getUser(id);
    return res.OK(userRecord);
});

const signIn = asyncHandler(async (req, res) => {
    const params = { ...req.body };
    checkMandatoryFields(params, ['email', 'password']);
    const response = await UserService.signIn(params);
    return res.OK(response);
});

const signUp = asyncHandler(async (req, res) => {
    const params = { ...req.body };
    checkMandatoryFields(params, ['name', 'email', 'password']);
    const userRecord = await UserService.createUser(params);
    return res.OK(userRecord);
});

const updateUser = asyncHandler(async (req, res) => {
    const params = { ...req.body };
    const id = req.userId;
    const userRecord = await UserService.updateUser(id, params);
    return res.OK(userRecord);
});

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.userId;
    const userRecord = await UserService.deleteUser(id);
    return res.OK(userRecord);
});

const resetPasswordRequest = asyncHandler(async (req, res) => {
    const params = { ...req.body };
    checkMandatoryFields(params, ['email']);
    const response = await UserService.resetPasswordRequest(params.email);
    return res.OK(response);
});

const changePassword = asyncHandler(async (req, res) => {
    const params = { ...req.query, ...req.body };
    checkMandatoryFields(params, ['token', 'userId', 'password']);
    const response = await UserService.changePassword(params.token, params.userId, params.password);
    return res.OK(response);
});


module.exports = {
    getUser,
    signUp,
    updateUser,
    deleteUser,
    signIn,
    resetPasswordRequest,
    changePassword,
}