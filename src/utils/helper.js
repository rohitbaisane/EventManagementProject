const ErrorResponse = require("./error");
const ErrorCodes = require("./status-codes");

const Event = require("../models/event");
async function generateEventCode() {

    const eventCode = Math.floor(Math.random() * 1000000);
    if (eventCode < 100000) {
        console.log(eventCode);
        return generateEventCode();
    }
    const event = await Event.findOne({ code: eventCode });
    if (event) {
        return generateEventCode();
    }
    return eventCode;

};

function compareEventTime(startTime, endTime) {
    const t1 = new Date(startTime).getTime();
    const t2 = new Date(endTime).getTime();


    const currTime = new Date().getTime();

    if (t1 >= t2) {
        console.log("starttime:  " + t1);
        console.log("endtime:  " + t2);
        throw new ErrorResponse(
            "start time cannot be greater than end time",
            ErrorCodes.BAD_REQUESET,);
    }

    if (t1 <= currTime) {
        throw new ErrorResponse(
            "start time cannot be less than current time",
            ErrorCodes.BAD_REQUESET,);
    }


}
module.exports = {
    generateEventCode,
    compareEventTime
};