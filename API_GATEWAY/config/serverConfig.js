const dotenv = require("dotenv");

dotenv.config();

const { PORT, JWT_SECREATE, CONTAINER_NAME, CONTAINER_PORT } = process.env;

module.exports = {
    PORT,
    JWT_SECREATE,
    CONTAINER_NAME,
    CONTAINER_PORT
}