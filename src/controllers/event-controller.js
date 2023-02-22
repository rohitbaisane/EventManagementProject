const { EventService } = require("../service/index");

const asyncHandler = require("../utils/asyncHandler");


const createEvent = asyncHandler(async (req, res) => {
    const params = { ...req.body, userId: req.user._id };
    const eventRecord = await EventService.createEvent(params);
    return res.CREATED(eventRecord);
});

const getEvent = asyncHandler(async (req, res) => {
    const params = { ...req.params };
    const eventRecord = await EventService.getEvent(params.id);
    return res.CREATED(eventRecord);
});

const updateEvent = asyncHandler(async (req, res) => {
    const params = { body: req.body, userId: req.user._id, eventId: req.params.id };
    const eventRecord = await EventService.updateEvent(params.eventId, params.userId, params.body);
    return res.OK(eventRecord);
});

const deleteEvent = asyncHandler(async (req, res) => {
    const params = { ...req.params, userId: req.user._id };
    const eventRecord = await EventService.deleteEvent(params.id, params.userId);
    return res.OK(eventRecord);
});

module.exports = {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent,
}