"use strict";

const env = require('../../config/environments');

const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async run() {
        try {
            let adminUser = await User.findOne({ email: env.ADMIN_LOGIN }); 

            if (adminUser)
                return;

            let data = {
                email: env.ADMIN_LOGIN,
                password: 'secret',
            };

            return User.create(data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

//  Db Seed