'use strict';

const queryController = require('./../../controllers/v1/query');
const isAuthenticated = require("../../shared/middlewares/isAuthenticated");

const USER_ROUTES = [
    { path: '/query/seed/ipl-booking', method: 'POST', handlers: [ isAuthenticated('client'), queryController.seedIplBooking ] },
    { path: '/query/seed/ipl-event', method: 'POST', handlers: [ isAuthenticated('client'), queryController.seedIplEvent ] },
];

module.exports = USER_ROUTES;