'use strict';

const userController = require('./user-controller');

const USER_ROUTES = [
	{ path: '/user', method: 'GET', handlers: [ userController.getUserDetails ] },
	{ path: '/sso/organisation/:org', method: 'GET', handlers: [ userController.getOrganisation]}
];

module.exports = USER_ROUTES;