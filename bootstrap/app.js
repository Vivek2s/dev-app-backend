'use strict';

require('./../config/utils').cmdparser.loadCmdArgs();

const express = require('express');
const app = express();

require('./../config')(app);

module.exports = app;