'use strict';

const join = require('path').join;

exports.ROOT_DIR = join(__dirname, '../..');

exports.NODE_ENV = process.env.ENV;
exports.CLUSTERED = process.env.CLUSTERED;
exports.BASE_URL = process.env.BASE_URL;
exports.APP_URL = process.env.APP_URL;
exports.LOG_DIR = process.env.LOG_DIR || `${exports.ROOT_DIR}/config/logger/logs`;
exports.LOG_LEVEL = process.env.LOG_LEVEL || 'info';
exports.PORT = process.env.PORT;
exports.DB = process.env.DB;
exports.DB_OPTIONS = {
    promiseLibrary: global.Promise,
	useMongoClient: true
};

exports.ACTIVE_APIS = process.env.ACTIVE_APIS;
exports.RESOURCE_FOLDER = process.env.RESOURCE_FOLDER || 'resources';
exports.ADMIN_LOGIN = process.env.ADMIN_LOGIN;

exports.ACCESS_EXPIRATION = process.env.ACCESS_EXPIRATION;
exports.REFRESH_EXPIRATION = process.env.REFRESH_EXPIRATION;
exports.HASH_EXPIRATION = process.env.HASH_EXPIRATION;
exports.SECRET = process.env.SECRET;
exports.ISSUER = process.env.ISSUER;