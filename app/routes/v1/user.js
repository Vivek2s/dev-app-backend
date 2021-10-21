'use strict';

const userController = require('./../../controllers/v1/user');
const isAuthenticated = require('./../../shared/middlewares/isAuthenticated');

const USER_ROUTES = [
	{ path: '/user', method: 'GET', handlers: [ isAuthenticated(), userController.getUserDetails ] },
];

module.exports = USER_ROUTES;