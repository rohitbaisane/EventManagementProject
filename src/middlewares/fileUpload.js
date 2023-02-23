const multer = require("multer");
const asyncHandler = require("../utils/asyncHandler");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

module.exports = upload;
