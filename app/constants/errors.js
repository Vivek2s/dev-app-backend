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
	"ROUTER_NOT_DEFINED": {
		"code": "E_ROUTER_NOT_DEFINED",
		"status": 501,
		"message": "Router hasn't been implemented yet"
	},
	"UNSUPPORTED_STRATEGY": {
		"code": "E_UNSUPPORTED_STRATEGY",
		"status": 500,
		"message": "Strategy requested is not supported"
	},
	"INTERNAL_SERVER_ERROR": {
		"code": "E_INTERNAL_SERVER_ERROR",
		"status": 500,
		"message": "Something bad happened"
	},
	"CREDENTIALS_INCORRECT": {
		"code": "E_CREDENTIALS_INCORRECT",
		"status": 401,
		"message": "Provided credentials are incorrect"
	},
	"DUPLICATE_RESOURCE": {
		"code": "E_DUPLICATE_RESOURCE",
		"status": 500,
		"message": "Resource is already present"
	},
}

module.exports = {
    PREDEFINED_ERRORS,
    CUSTOM_ERRORS
}