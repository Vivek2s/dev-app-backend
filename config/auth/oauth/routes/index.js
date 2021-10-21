"use strict";

const oauth = require('../../../../app/controllers/v1/oauth');
const isAuthenticated = require('../../../../app/shared/middlewares/isAuthenticated');
const isLoginValidate = require('../../../../app/shared/middlewares/isLoginValidate');

const setupOauthEndpoints = (routers, server) => {
	let _tokenMiddleWares = [];

	const _registerMiddleWares = [
		isAuthenticated('client'),
		oauth.user.register,
		server.token(),
		server.errorHandler()
	];

	const _loginMiddleWares = _tokenMiddleWares = [
		isAuthenticated('client'),
		isLoginValidate,
		server.token(),
		server.errorHandler()
	];

    routers.forEach(router => {
        if (router.version !== 'root') {
            router.router.post('/oauth/register', _registerMiddleWares);
            router.router.post('/oauth/login', _loginMiddleWares);
            router.router.post('/oauth/token', _tokenMiddleWares);
        }
    });
}

module.exports = {
	setupOauthEndpoints
};