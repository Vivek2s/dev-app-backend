"use strict";

const base = require('../../controllers/v1');

const API_ROUTES = [
	{ path: '', method: 'GET', handlers: [ base.index ] }
];

module.exports = API_ROUTES;