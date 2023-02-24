const express = require("express");
const router = express.Router();

const { EventController } = require("../controllers/index");

const isValidUser = require("../middlewares/auth");

router.post("/event", isValidUser, EventController.createEvent);
router.delete("/event/:id", isValidUser, EventController.deleteEvent);
router.get("/event/invitationlist", isValidUser, EventController.getInvitationsList);
router.get("/event/:id", isValidUser, EventController.getEvent);
router.get("/event", isValidUser, EventController.getAllEvents);
router.patch("/event/:id", isValidUser, EventController.updateEvent);
router.post("/event/invite", isValidUser, EventController.updateInviteStatus);

module.exports = router;