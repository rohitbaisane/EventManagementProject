const express = require("express");
const router = express.Router();

const { EventController } = require("../controllers/index");

const isValidUser = require("../middlewares/auth");
const upload = require("../middlewares/file-upload");

router.post("/event", isValidUser, EventController.createEvent);
router.delete("/event/:id", isValidUser, EventController.deleteEvent);
router.get("/event/:id", isValidUser, EventController.getEvent);
router.get("/event", isValidUser, EventController.getAllEvents);
router.patch("/event/:id", isValidUser, EventController.updateEvent);
router.post("/fileupload", isValidUser, upload.array("images", 10), EventController.uploadImage);
module.exports = router;