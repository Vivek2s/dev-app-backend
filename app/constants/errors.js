"use strict";

const PREDEFINED_ERRORS = {
	"ValidationError": {
		"code": "E_DATA_INVALID",
		"status": 500,
		"message": "Supplied data did not pass the validation check"
	},
	"MongoError": {
		"code": "E_DB_ERROR",
		"status": 500,
		"message": "Error while processing db query"
	},
	"CastError": {
		"code": "E_DB_ERROR",
		"status": 500,
		"message": "Error while processing db id casting"
	}
};

const CUSTOM_ERRORS = {
    "API_ROUTER_NOT_FOUND": {
		"code": "E_API_ROUTER_NOT_FOUND",
		"status": 500,
		"message": "Router for the API requested hasn't been implemented yet"
	},
	"API_RESOURCE_NOT_FOUND":{
		"code": "E_API_RESOURCE_NOT_FOUND",
		"status": 500,
		"message": "Resource for the API requested not found"
	},
	"RESOURCE_NOT_FOUND": {
		"code": "E_RESOURCE_NOT_FOUND",
		"status": 404,
		"message": "Requested resource not found"
	},
}

module.exports = {
    PREDEFINED_ERRORS,
    CUSTOM_ERRORS
}