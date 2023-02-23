const Event = require("../models/event");

var cron = require('node-cron');

cron.schedule('* * * * *', async () => {
    console.log("Cron is running correctly");
    const eventRecords = await Event.find();
    for (let i = 0; i < eventRecords.length; i++) {
        const eventRecord = eventRecords[i];
        const eventDate = eventRecord.startTime.toDateString();
        const currDate = new Date().toDateString();
        console.log(currDate);
        console.log(eventDate);
        if (currDate == eventDate) {
            console.log("sendMail");
        }
    }
}
);
