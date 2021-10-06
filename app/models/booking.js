"use strict";

const mongoose = require('mongoose');
const BookingSchema = require('./schemas/booking');

module.exports = mongoose.model('Booking', BookingSchema);