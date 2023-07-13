const {validationResult} = require("express-validator/check");

module.exports = req => {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpy()){
        const error = new Error("Validation Failed");
        error.statusCode = 422;
        error.validation = validationErrors.array();
        throw error;
    }
};