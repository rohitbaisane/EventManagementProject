const express = require("express");
const router = express.Router();

const eventRoutes = require("./event-routes");
const userRoutes = require("./user-routes");

router.use('/', eventRoutes);
router.use('/', userRoutes);

module.exports = router;