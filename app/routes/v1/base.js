"use strict";

const base = require('../../resources/base/v1/base-controller');

const API_ROUTES = [
	{ path: '', method: 'GET', handlers: [ base.index ] }
];

module.exports = API_ROUTES;