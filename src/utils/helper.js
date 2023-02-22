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

module.exports = generateEventCode;