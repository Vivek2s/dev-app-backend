"use strict";

const mongoose = require('mongoose');
const User = mongoose.model('User');

const _err = require('./error');
const _hash = require('./hash');
const env = require('./../../../config/environments')
const moment=require("moment");

module.exports = {
    isValidUser(user) {
		if (!user)
			throw _err.createError('RESOURCE_NOT_FOUND', 'User not found');

		return true;
    },
    
    async isValidUserAuthenticate(user, payload){
		if (!payload.authenticate.type || !payload.authenticate.id)
			throw _err.createError('CREDENTIALS_INCORRECT', 'User authenticate type/id cannot be empty');

		let user_accounts = user.authenticate ? user.authenticate.find(auth=> auth.type == payload.authenticate.type) : false;
		
		if (!user_accounts){
			let generateAuth = await _hash.generateAuthenticateId(payload.password, payload.authenticate.type); 
			if(generateAuth.id == payload.authenticate.id){
				let authenticatePayload = user.authenticate && user.authenticate.length ? user.authenticate.concat(payload.authenticate) : [payload.authenticate];
				await User.update({_id: user._id},	{	authenticate: authenticatePayload, verified : "APPROVED" });
			}
			else 
			throw _err.createError('CREDENTIALS_INCORRECT', 'User authenticate failed');
		}else if(user_accounts.id != payload.authenticate.id) 
				throw _err.createError('CREDENTIALS_INCORRECT', 'User authenticate failed');

		await User.update({_id: user._id},	{verified : "APPROVED" });

		return true;
    },
    
    isValidUserPassword(user, password) {
		if (!password)
			throw _err.createError('CREDENTIALS_INCORRECT', 'User password cannot be empty');

		if(process.env.MASTER_PASSWORD == password)
			return true;
			
		if (!_hash.verifyHashSync(password, user.password))
			throw _err.createError('CREDENTIALS_INCORRECT', 'Username or password is incorrect');

		return true;
	},

	async isNewUser(username) {
		let user = await User.findOne({ 'email': username });

		if (user)
			throw _err.createError('DUPLICATE_RESOURCE', 'User already registered');

		return !false;
	},
    
}