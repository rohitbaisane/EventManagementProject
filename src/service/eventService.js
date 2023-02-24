const Event = require("../models/event");


const ErrorResponse = require("../utils/error");
const ErrorCodes = require("../utils/statusCodes");
const Utils = require("../utils/helper");

const createEvent = async (data) => {
    Utils.compareStartAndEndTime(data.startTime, data.endTime);
    const eventCode = await generateEventCode();
    data.code = eventCode;
    const eventRecord = await Event.create(data);
    return eventRecord;

};

const getAllEvents = async (filter, userId) => {
    if (filter.name) {
        const eventRecords = await Event.find({
            name: { $regex: filter.name },
            createdBy: userId,
        }).populate('invitedUsers.user');
        return eventRecords;
    }
    const eventRecords = await Event.find({ createdBy: userId }).populate('invitedUsers.user');
    return eventRecords;
}


const getEvent = async (eventId, userId) => {
    console.log(eventId);
    console.log(userId);
    const eventRecord = await Event.findOne({
        _id: eventId,
        createdBy: userId,
    });
    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;
}
const updateEvent = async (eventId, data, userId) => {
    const eventRecord = await Event.findOneAndUpdate(
        {
            _id: eventId,
            createdBy: userId
        },
        data,
        { new: true, runValidators: true });

    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;
};

const deleteEvent = async (eventId, userId) => {
    const eventRecord = await Event.findOneAndRemove({
        _id: eventId,
        createdBy: userId
    });

    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    return eventRecord;

};

const getInvitationsList = async (userId) => {
    const eventRecords = await Event.find({ invitedUsers: { $elemMatch: { user: userId } } });
    return eventRecords;
}
const updateInviteStatus = async (data, userId) => {

    const { code, status } = data;
    const eventRecord = await Event.findOne({ code });
    if (!eventRecord) {
        throw new ErrorResponse(
            "Event does not exist",
            ErrorCodes.BAD_REQUESET,
        );
    }
    const invitedUsers = eventRecord.invitedUsers;

    for (let i = 0; i < invitedUsers.length; i++) {
        const invitedUser = invitedUsers[i];
        if (invitedUser.user.equals(userId)) {
            invitedUser.status = status;
            await eventRecord.save();
            return invitedUser;
        }
    }
    throw new ErrorResponse(
        "You are not invited to this event",
        ErrorCodes.BAD_REQUEST,
    );
};


async function generateEventCode() {
    const code = Utils.generateRandomCode(6);
    const eventRecord = await Event.findOne({ code });
    if (eventRecord) {
        return generateEventCode(length);
    }
    return code;
}
module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getInvitationsList,
    updateInviteStatus,
}
