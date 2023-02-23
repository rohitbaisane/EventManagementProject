const express = require("express");
const router = express.Router();

const eventRoutes = require("./eventRoutes");
const userRoutes = require("./userRoutes");
const fileUploadRoutes = require("./fileUploadRoutes");

router.use('/', fileUploadRoutes);
router.use('/', eventRoutes);
router.use('/', userRoutes);

module.exports = router;