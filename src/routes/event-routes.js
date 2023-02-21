const express = require("express");
const router = express.Router();

const { EventController } = require("../controllers/index");

const isValidUser = require("../middlewares/auth");

router.post("/event", isValidUser, EventController.createEvent);
router.delete("/event/:id", isValidUser, EventController.deleteEvent);
router.get("/event/:id", EventController.getEvent);
router.patch("/event/:id", isValidUser, EventController.updateEvent);

module.exports = router;