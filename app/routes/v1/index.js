'use strict';

const routes = [
    ...require('./base'),
    ...require('../../resources/v1/user/user-route'),
    ...require('./oauth')
]

module.exports = routes;