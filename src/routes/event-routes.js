const express = require("express");
const router = express.Router();

const { EventController } = require("../controllers/index");

const isValidUser = require("../middlewares/auth");
const upload = require("../middlewares/file-upload");

router.post("/event", isValidUser, upload.single("files"), EventController.createEvent);
router.delete("/event/:id", isValidUser, EventController.deleteEvent);
router.get("/event/:id", EventController.getEvent);
router.patch("/event/:id", isValidUser, EventController.updateEvent);
router.post("/fileupload", isValidUser, upload.single("image"), EventController.uploadImage);
module.exports = router;