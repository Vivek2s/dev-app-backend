"use strict";

const mongoose = require('mongoose');
const IplBookingSchema = require('./schemas/ipl-booking');

module.exports = mongoose.model('IplBooking', IplBookingSchema);