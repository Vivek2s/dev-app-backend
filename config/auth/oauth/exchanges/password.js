"use strict";

const oauth2orize = require('oauth2orize');
const _ = require('lodash');
const { EXPIRES_IN } = require('../../jwt');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const OauthToken = mongoose.model('OauthToken');

const _token = require('./../../../../app/shared/helpers/token'); 
const _userValidator = require('../../../../app/shared/helpers/user');

const _postClientValidate = async (client, username, password, scope, payload, done) => {

	try {
		let remember_me = payload.remember_me ? payload.remember_me : false;
		username = username.trim().toLowerCase();
		let user = await User.findOne({ 'email' : username }).populate('roles').lean(); 
	
		if(_userValidator.isValidUser(user)){ 
			
			if (!scope)
				scope = [];
			
			if (
                    _userValidator.isValidUserPassword(user, password)
                ) {

				//scope.push(...user.roles.map(role => role.name.toLowerCase()));
				scope = Array.from(new Set(scope));

				let data = {
					email: user.email,
					client: client.client_name,
					time: Date.now()
				};

				let tokenMetas = { audience: client.client_name };

				let tokens = _token.generateTokens(data, scope, tokenMetas, true, remember_me);

				await OauthToken.saveTokens(user, client, tokens, scope, OauthToken);

				return done (
					null,
					tokens.ACCESS.token,
					null,
					{ 'expires_in': remember_me ? EXPIRES_IN.refresh : tokens.ACCESS.expiresIn, 'scope': scope.join(' '), user }
				);
			}
		}
	}

	catch(error) {
		done(error);
	}
};

module.exports = oauth2orize.exchange.password(_postClientValidate);
