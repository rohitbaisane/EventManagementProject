const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
    },
    invitedUsers: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    userId: {
        type: userId,
        required: true,
    },
    maximumAllowedUsers: {
        type: Number
    },
    images: {
        type: String,
    }
}, {
    timestamps: true
});

const eventModel = mongoose.model("Event", eventSchema, "events");
module.exports = eventModel;