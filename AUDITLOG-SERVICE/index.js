const express = require("express");
const app = express();

require("./db");

const { PORT } = require("./config/config");

require("./subscriber").subscribe();
// prepare and start the starver.
const prepareAndStartServer = async (req, res) => {

    //parser the incoming json and url-encoded data.
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.listen(PORT, () => {
        console.log("Server is listening");
    })

};

prepareAndStartServer();