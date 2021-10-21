"use strict";

const mongoose = require('mongoose');
const OauthClient = mongoose.model('OauthClient');
const User = mongoose.model('User');

const _err = require('./error');

const _user = require('./user');
const _token = require('./token');

//noinspection JSAnnotator
const self = module.exports = {
	isValidOauthRequest (requestBody) {

		if (!requestBody.username)
			throw _err.createError('BAD_REQUEST', "username field is missing");

		if (!requestBody.password)
			throw _err.createError('BAD_REQUEST', "password field is missing");

		if (!requestBody.grant_type)
			throw _err.createError('BAD_REQUEST', "Unsupported grant type");

		// if (!requestBody.roles)
		// 	throw _err.createError('BAD_REQUEST', 'roles are required');
			
		return true;
	},

	isValidOauthClient (client) {
		if (!client)
			throw _err.createError('USER_NOT_FOUND', 'Client not found');

		return true;
	},

	isValidClientSecret (client, clientSecret) {
		if (!clientSecret)
			throw _err.createError('CREDENTIALS_INCORRECT', 'Client Secret cannot be empty');

		if (client.client_secret !== clientSecret)
			throw _err.createError('CREDENTIALS_INCORRECT', 'Client secret do not match');

		return true;
	},

	async isValidToken (token, type) {
		try {
			console.log(token, type, token.type)
			if (!token)
				throw new Error;

			if (type && token.type !== type)
				throw new Error;

			let client = await OauthClient.findById(token.client_id);
			let user = token.user_id ? await User.findById(token.user_id) : {};

			if (self.isValidOauthClient(client) && _user.isValidUser(user))
				return true;
		}

		catch(error) { throw _err.createError('INVALID_TOKEN', "Token validation failed") }
	},

	isVerifiedToken (accessToken, verificationOptions) {
		return _token.verifyToken(accessToken, verificationOptions);
	},

	tokenHaveScope (scopes, checkForScopes) {
		if (typeof scopes === 'string')
			scopes = scopes.split(" ");

		if (!checkForScopes.some(scope => scopes.indexOf(scope) !== -1))
			throw _err.createError('INVALID_TOKEN', 'Not authorized');

		return true;
	}
};
