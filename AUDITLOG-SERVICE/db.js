const mongoose = require("mongoose");
const { MONGO_URL } = require("./config/config");

connect = () => {
    mongoose.connect(MONGO_URL).then(() => {
        console.log("Database is connected successfully");
    });
}

connect();