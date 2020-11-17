"use strict";

const anyBearer = require('./strategies/bearer-any');
const clientBasic = require('./strategies/client-basic');
const basic = require('./strategies/basic');

module.exports = {
    basic,
	clientBasic,
    anyBearer
};