"use strict";

const mongoose = require('mongoose');
const OauthToken = mongoose.model('OauthToken');
const OauthClient = mongoose.model('OauthClient');

const _validator = require('./../../../../app/shared/helpers/oauth');
const _redisClient = require('./../../../../app/shared/helpers/redis');

const _validateBearerTokenFor = function (...scopes) {

	return async (req, accessToken, done) => {
		try {
			let key = req.get('user_id');
			let cacheToken = await _redisClient.for(key).get();

			let token;
			if(cacheToken){
				console.log(cacheToken);
				token = JSON.parse(cacheToken);
			}
			else
			token = await OauthToken.findOne({token: accessToken});

			if (await _validator.isValidToken(token, 'ACCESS')) {
				let issclient = OauthClient.findById(token.client_id);

				let verificationOptions = {
					audience: issclient.client_name
				};

				let decodedToken = _validator.isVerifiedToken(accessToken, verificationOptions);

				if (!scopes.length || _validator.tokenHaveScope(decodedToken.scope, scopes))
					return done(null, token, decodedToken);
			}
		}
		catch (error) {
			done(null, false);
		}
	}
}

module.exports = _validateBearerTokenFor;
