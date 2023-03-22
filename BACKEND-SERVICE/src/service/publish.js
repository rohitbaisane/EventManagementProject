const Broker = require("rascal").BrokerAsPromised;
const config = require("../config/queueConfig.json");

let broker;

(async function connection() {
    console.log("new connection created");
    broker = await Broker.create(config);
})();

module.exports = function publish(message) {
    broker.publish("auditlog_pub", message);
}
