"use strict";

const mongoose = require('mongoose');
const OauthClient = mongoose.model('OauthClient');
const User = mongoose.model('User');
const _hashHelper = require('../../app/shared/helpers/hash');

module.exports = {
	async run () {
		let admin = await User.findOne({ email: process.env.ADMIN_LOGIN });
		if (!admin) 
            throw "Admin user not in DB";

        let oauthClient = await OauthClient.findOne({ 'user_id': admin._id });

        if (oauthClient || !admin) return;

        let secret  = await _hashHelper.generateSecret([ admin._id, 'Web App' ]);

        return OauthClient.create({
            user_id: admin._id,
            client_id: 'devapp',
            client_name: 'Web App',
            client_secret: secret,
            redirect_uri: ""
        });
	}
};
