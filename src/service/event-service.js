const Event = require("../models/event");
const generateEventCode = require("../utils/helper");

const createEvent = async (data) => {
    const eventCode = await generateEventCode();
    data.code = eventCode;
    const eventRecord = await Event.create(data);
    return eventRecord;

};

const getEvent = async (eventId) => {
    console.log(eventId);
    const eventRecord = await Event.findById(eventId);
    return eventRecord;
}
const updateEvent = async () => {

};

const deleteEvent = async (eventId) => {
    const eventRecord = await Event.findByIdAndRemove(eventId);
    return eventRecord;

};

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
