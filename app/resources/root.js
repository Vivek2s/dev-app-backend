"use strict";

const _err = require('../shared/helpers/error');
const response = require('../shared/middlewares/response');

exports.index = (req, res) => response.ok(res, { message: 'Death Capsule API' });

exports.error = (req, res) => response.error(res, _err.createError('RESOURCE_NOT_FOUND', 'Route requested not found'));