"use strict";

const base = require('../../resources/v1/base/base-controller');

const API_ROUTES = [
	{ path: '', method: 'GET', handlers: [ base.index ] }
];

module.exports = API_ROUTES;