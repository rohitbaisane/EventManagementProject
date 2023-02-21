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
        required: true,
        maxlength: 6,
    },
    invitedUsers: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
    },
    maximumAllowedUsers: {
        type: Number,
        required: true,
    },
    images: [String],
}, {
    timestamps: true
});

const eventModel = mongoose.model("Event", eventSchema, "events");
module.exports = eventModel;