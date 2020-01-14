'use strict';

require('dotenv').config();

const defaults = require('./default');
const development = Object.assign({}, defaults, require('./development'));
const production = Object.assign({}, defaults, require('./production'));

module.exports = {
    development,
    production
}[ process.env.ENV || 'development']