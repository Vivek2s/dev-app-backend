'use strict';

const response = require('../../shared/middlewares/response');
const env = require('./../../../config/environments');

exports.index = (req, res) => response.ok(res, `${env.PROJECT_NAME} v1 is working`); 