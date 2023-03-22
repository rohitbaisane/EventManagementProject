const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const auditLogSchema = new Schema({
    event: {
        type: Object,
        required: true,
    },
    reqData: {
        type: Object,
        required: true,
    },
    resData: {
        type: Object,
        required: true,

    },
    origin: {
        type: Object,
        required: true,
    }
});

const AuditLogModel = mongoose.model("AuditLog", auditLogSchema);
module.exports = AuditLogModel;