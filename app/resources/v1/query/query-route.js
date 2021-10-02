'use strict';

const queryController = require('./query-controller');

const USER_SSO_ROUTES = [
	{ path: '/query/user-sso-config', method: 'POST', handlers: [ queryController.createSSOConfig ] },
];

module.exports = USER_SSO_ROUTES;