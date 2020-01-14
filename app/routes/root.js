"use strict";

const root = require('../resources/root');

const API_ROUTES = [
	{ path: '', method: 'GET', handlers: [ root.index ] },
    { path: '*', method: 'ALL', handlers: [ root.error ] }
];

module.exports = API_ROUTES;