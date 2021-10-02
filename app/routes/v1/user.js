'use strict';

const userController = require('./../../controllers/v1/user');

const USER_ROUTES = [
	{ path: '/user', method: 'GET', handlers: [ userController.getUserDetails ] },
];

module.exports = USER_ROUTES;