
const dotenv = require("dotenv");


dotenv.config();

const { PORT, JWT_SECREATE } = process.env;

module.exports = {
    PORT,
    JWT_SECREATE,
}