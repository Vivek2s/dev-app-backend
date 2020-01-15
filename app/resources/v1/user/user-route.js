'use strict';

const userController = require('./user-controller');

const USER_ROUTES = [
	{ path: '/user', method: 'GET', handlers: [ userController.getUserDetails ] },
];

module.exports = USER_ROUTES;