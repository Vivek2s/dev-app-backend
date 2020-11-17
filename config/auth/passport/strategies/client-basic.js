"use strict";

const mongoose = require('mongoose');
const OauthClient = mongoose.model('OauthClient');

const _validator = require('./../../../../app/shared/helpers/oauth');

const { BasicStrategy } = require('passport-http');

const _validateClient = async (clientId, clientSecret, done) => {
	try {
		let client = await OauthClient.findOne({ 'client_id': clientId }).populate('user_id');

		if (_validator.isValidOauthClient(client) && _validator.isValidClientSecret(client, clientSecret))
			done(null, client);
	}

	catch(error) { done(null, false); }
};

module.exports = {
	strategy: new BasicStrategy(_validateClient)
};