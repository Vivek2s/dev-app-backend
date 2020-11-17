"use strict";

const extend = require('util')._extend;
const jwt = require('jsonwebtoken');
const { JWT_CONFIG, EXPIRES_IN, JWT_VALID_META, JWT_VERIFICATION_OPT } = require('../../../config/auth/jwt');

const _err = require('./error.js');

const self = module.exports = {

	generateTokens (data, scope, tokenMetas = null, accessOnly = false, remember_me = false) {

		if (tokenMetas)
			self.areVerifiedTokenMetas(tokenMetas);

		if (accessOnly) return {
			'ACCESS': {
				token: self.generateToken('ACCESS', data, scope, tokenMetas, remember_me),
				expiresIn: EXPIRES_IN.access
			}
		};

		return {
			'ACCESS': {
				token: self.generateToken('ACCESS', data, scope, tokenMetas, remember_me),
				expiresIn: EXPIRES_IN.access
			},
		};
	},

	generateToken(tokenType, tokenData, scope, tokenMetas, long_lived = false) {

		let data = Object.assign({}, tokenData);

		data['token_type'] = tokenType;

		if (scope)
			data['scope'] = scope.join(' ');

		let JWT_OPTIONS = self.getJWTOptions(tokenType, tokenMetas, long_lived);

		return jwt.sign(data, JWT_CONFIG.secret, JWT_OPTIONS);
	},

	verifyToken(token, checkFor = null) {

		let verificationOptions = JWT_VERIFICATION_OPT;

		if (checkFor)
			extend(verificationOptions, checkFor);

		return jwt.verify(token, JWT_CONFIG.secret, verificationOptions);
	},

	areVerifiedTokenMetas (tokenMetas) {
		for (let metaKey in tokenMetas)
			if (JWT_VALID_META.indexOf(metaKey) < 0)
				throw _err.createError('INVALID_JWT_OPTION', `${metaKey} is not a valid JWT option`);

		return true;
	},

	getJWTOptions (tokenType, tokenMetas, long_lived) {
		let JWT_DEFAULTS = {
			expiresIn: long_lived ? EXPIRES_IN['refresh'] : EXPIRES_IN[ tokenType.toLowerCase() ] || EXPIRES_IN.default,
			algorithm: JWT_CONFIG.algorithm,
			issuer: JWT_CONFIG.issuer,
			audience: JWT_CONFIG.audience
		};

		if (tokenMetas)
			for (let metaKey in tokenMetas)
				JWT_DEFAULTS[metaKey] = tokenMetas[metaKey];

		return JWT_DEFAULTS;
	}
};