"use strict";

const mongoose = require('mongoose');
const UserTicketSchema = require('./schemas/user-ticket');

module.exports = mongoose.model('UserTicket', UserTicketSchema);