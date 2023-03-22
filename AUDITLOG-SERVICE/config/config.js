const dotenv = require("dotenv");
dotenv.config();


const envObj = { ...process.env };
console.log(envObj);

module.exports = envObj;