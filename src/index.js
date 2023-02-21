const express = require("express");
const app = express();

require("./db");

const errorHandler = require("./middlewares/error-handler");
const responses = require("./middlewares/response");
const apiRoutes = require("./routes/index");
const PORT = 5000;

// prepare and start the starver.
const prepareAndStartServer = async (req, res) => {

    //parser the incoming json and url-encoded data.
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/api", responses);
    app.use("/api", apiRoutes);
    app.use("/api", errorHandler);
    app.listen(PORT, () => {
        console.log("Server is listening");
    })

};

prepareAndStartServer();