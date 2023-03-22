const AuditLog = require("./models/auditLog");

const Broker = require("rascal").BrokerAsPromised;
const config = require("./config/queueconfig.json");


module.exports =
{
    subscribe: async () => {
        const broker = await Broker.create(config);
        const subscription = await broker.subscribe("auditlog_sub");
        subscription.on("message", async (message, content, ackOrNck) => {
            console.log(content);
            ackOrNck();
            const data = await AuditLog.create(content);
            console.log(data);
        });
    }
}