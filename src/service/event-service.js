const Event = require("../models/event");


const ErrorResponse = require("../utils/error");
const ErrorCodes = require("../utils/status-codes");
const { generateEventCode, compareEventTime } = require("../utils/helper");

const createEvent = async (data) => {

    compareEventTime(data.startTime, data.endTime);
    const eventCode = await generateEventCode();
    data.code = eventCode;
    const eventRecord = await Event.create(data);
    return eventRecord;

};

const getEvent = async (eventId) => {
    const eventRecord = await Event.findById(eventId);
    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;
}
const updateEvent = async (eventId, userId, data) => {
    const eventRecord = await Event.findOneAndUpdate({ _id: eventId, userId }, data, { new: true, runValidators: true });
    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;
};

const deleteEvent = async (eventId, userId) => {
    const eventRecord = await Event.findOneAndRemove({ _id: eventId, userId });
    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;

};

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
