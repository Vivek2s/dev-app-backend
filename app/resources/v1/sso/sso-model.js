"use strict";

const mongoose = require('mongoose');
const UserSSOSchema = require('./sso-schema');

module.exports = mongoose.model('UserSSO', UserSSOSchema);