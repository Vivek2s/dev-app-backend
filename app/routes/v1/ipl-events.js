'use strict';

const bookingController = require('../../controllers/v1/booking');
const isAuthenticated = require("../../shared/middlewares/isAuthenticated");

const USER_ROUTES = [
    { path: '/ipl-events/:season', method: 'GET', handlers: [ bookingController.getIplEvents ] },
];

module.exports = USER_ROUTES;