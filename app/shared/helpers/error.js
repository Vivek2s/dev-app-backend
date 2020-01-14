"use strict";

const E_CONSTANTS = require('./../../constants/errors');
const { logger } = require('../../../config/logger');

exports.getError =  (errName) => {
    return E_CONSTANTS.PREDEFINED_ERRORS[errName] || E_CONSTANTS.CUSTOM_ERRORS[errName] || E_CONSTANTS.CUSTOM_ERRORS.INTERNAL_SERVER_ERROR;
};

exports.createError = (name, message = null, code = null, status = null) =>{
    const e = exports.getError(name);

    let error = new Error;

    error.code = code || e.code;
    error.message = message || e.message;
    error.status = status || e.status;
    logger.error(error);
    return error;
};

exports.isEmptyObject = (obj)=>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}