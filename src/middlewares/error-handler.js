
function errorHandler(err, req, res, next) {
    if (err.statusCode == 400) {
        return res.BADREQUEST(err);
    }
    return res.APPERROR(err);

}

module.exports = errorHandler;