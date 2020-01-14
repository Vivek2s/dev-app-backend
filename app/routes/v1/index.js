'use strict';

const routes = [
    ...require('./base'),
    ...require('../../resources/users/v1/user-route')
]

module.exports = routes;