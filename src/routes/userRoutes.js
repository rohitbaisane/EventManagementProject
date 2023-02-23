const express = require("express");
const router = express.Router();


const { UserController } = require("../controllers/index");

const isValidUser = require("../middlewares/auth");

router.get("/user/me", isValidUser, UserController.getUser);
router.post("/resetpassword", UserController.resetPasswordRequest);
router.post("/changepassword", UserController.changePassword);
router.post("/user", UserController.signUp);
router.post("/signin", UserController.signIn);
router.patch("/user/me", isValidUser, UserController.updateUser);
router.delete("/user/me", isValidUser, UserController.deleteUser);

module.exports = router;