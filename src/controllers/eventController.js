const { EventService } = require("../service/index");

const asyncHandler = require("../utils/asyncHandler");

const createEvent = asyncHandler(async (req, res) => {
    const params = { ...req.body, createdBy: req.userId };
    const eventRecord = await EventService.createEvent(params);
    return res.CREATED(eventRecord);
});

const getEvent = asyncHandler(async (req, res) => {
    const params = req.params;
    const userId = req.userId
    const eventRecord = await EventService.getEvent(params.id, userId);
    return res.CREATED(eventRecord);
});

const getAllEvents = asyncHandler(async (req, res) => {
    const params = req.query;
    const userId = req.userId;
    const eventRecords = await EventService.getAllEvents(params, userId);
    return res.OK(eventRecords);
})

const updateEvent = asyncHandler(async (req, res) => {
    const params = { ...req.body, ...req.params };
    const userId = { req };
    const eventRecord = await EventService.updateEvent(params.id, params, userId);
    return res.OK(eventRecord);
});

const deleteEvent = asyncHandler(async (req, res) => {
    const params = req.params;
    const userId = { req };
    const eventRecord = await EventService.deleteEvent(params.id, userId);
    return res.OK(eventRecord);
});

module.exports = {
    createEvent,
    getEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
}