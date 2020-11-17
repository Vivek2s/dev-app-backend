"use strict";

const env = require('../../../environments');

const mongoose = require('mongoose');
const User = mongoose.model('User');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const response = require('../../../../app/shared/middlewares/response');
const _validator = require('./../../../../app/shared/helpers/user');

const _oauthConfig = {
    usernameField: 'username',
    password: 'password'
};

const _localOauth = async (username, password, done) => {
    try {
        let user = await User.findOne({email: username.trim()});
        if (
            _validator.isValidUser(user) &&
            _validator.isValidUserPassword(user, password)
        )
        return done(null, user);
    }
    catch(err) {
        return done(null, false);
    }
};

module.exports = {
    strategy: new LocalStrategy(_oauthConfig, _localOauth)
};