"use strict";

const mongoose = require('mongoose');
const BookingEventSchema = require('./schemas/booking-event');

module.exports = mongoose.model('BookingEvent', BookingEventSchema);