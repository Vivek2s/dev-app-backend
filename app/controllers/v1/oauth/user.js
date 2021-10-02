"use strict";

const env = require('../../../../config/environments');
const moment = require('moment');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const OauthClient = mongoose.model('OauthClient');

const response = require('../../../shared/middlewares/response');

const _validatorUser = require('../../../shared/helpers/user');
const _validatorOauth = require('./../../../shared/helpers/oauth')
//const _hash = require('../../../shared/helpers/hash');
const _err = require('../../../shared/helpers/error');
//const _oauth = require('../../../shared/helpers/oauth');
//const _user = require('../../../shared/helpers/user');

module.exports = {

	async getClientCredentials(req, res) {
		try {
			let client = await OauthClient.findOne({
				user_id: req.user._id
			});
			if (!client)
				throw _err.createError('USER_NOT_FOUND', 'Client not found');
				
				
			response.ok(res, {
				id: client.client_id,
				secret: client.client_secret
			});
		} catch (error) {
			response.error(res, error);
		}
	},

	async register(req, res, next) {
		try {
			if (
				_validatorOauth.isValidOauthRequest(req.body) &&
				await _validatorUser.isNewUser(req.body.username.toLowerCase())
			) {

				console.log('::::::::::::::::', req.body);
				let data = Object.assign({email: req.body.username}, req.body);
				//console.log("role", data)
				
				


				
               let user = await User.create(data);
				
			   console.log(user, 'user')

				next(null, user);
			}
		} catch (err) {
			console.log(err)
			response.error(res, err.status ? err : _err.getError(err.name));
		}
	}

};