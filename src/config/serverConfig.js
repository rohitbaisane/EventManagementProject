
const dotenv = require("dotenv");


dotenv.config();

const { PORT, JWT_SECREATE, username, PASSWORD } = process.env;

console.log(PORT);

module.exports = {
    PORT,
    JWT_SECREATE,
    username,
    PASSWORD
}