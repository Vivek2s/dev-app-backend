"use strict";

const env = require('../environments');

const day = 24*60*60;

exports.JWT_VALID_META = [
	'algorithm', 'expiresIn', 'notBefore', 'audience', 'issuer', 'jwtid', 'subject', 'noTimestamp', 'header'
];

exports.EXPIRES_IN = {
	'default': day,
	'access': env.ACCESS_EXPIRATION ? parseInt(env.ACCESS_EXPIRATION) : day,
	'refresh': env.REFRESH_EXPIRATION ? parseInt(env.REFRESH_EXPIRATION) : 2 * 365 * day
};

const JWT_CONFIG = exports.JWT_CONFIG = {
	'algorithm': 'HS256',
	'secret': env.SECRET,
	'issuer': env.ISSUER,
	'audience': 'Web App'
};

exports.JWT_VERIFICATION_OPT = {
	'algorithm': JWT_CONFIG.algorithm,
	'issuer': JWT_CONFIG.issuer
};