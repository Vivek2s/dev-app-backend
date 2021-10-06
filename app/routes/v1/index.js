'use strict';

const routes = [
    ...require('./base'),
    ...require('./user'),
    ...require('./oauth'),
    ...require('./query'),
    ...require('./ipl-events')
]

module.exports = routes;