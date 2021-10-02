'use strict';

const routes = [
    ...require('./base'),
    ...require('./user'),
    ...require('./oauth')
]

module.exports = routes;