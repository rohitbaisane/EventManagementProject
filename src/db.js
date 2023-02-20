const mongoose = require("mongoose");

mongoose.set("strictQuery", false);


const connect = async () => {
    await mongoose.connect("mongodb://localhost:27017/Event_Management");
    console.log("Database is connected");
};

connect();