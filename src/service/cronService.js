const Event = require("../models/event");

var cron = require('node-cron');

cron.schedule('* * * * *', async () => {
    console.log("Cron is running correctly");
    const eventRecords = await Event.find();
    for (let i = 0; i < eventRecords.length; i++) {
        const eventRecord = eventRecords[i];
        const startTime = eventRecord.startTime.getTime();
        const currTime = new Date().getTime();
        console.log((currTime - startTime) / (60 * 1000));
        if (startTime - currTime == 15 * 60 * 1000) {
            console.log("Sending email to all users of event");
        }
    }
});
