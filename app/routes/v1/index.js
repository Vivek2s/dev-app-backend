'use strict';

const routes = [
    ...require('./base'),
    ...require('../../resources/v1/user/user-route'),
    ...require('./oauth'),
    ...require('../../resources/v1/query/query-route')
]

module.exports = routes;