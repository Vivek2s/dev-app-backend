'use strict';


const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
const BookingEvent = mongoose.model('BookingEvent');
const IplBooking = mongoose.model('IplBooking');
const IplEvent = mongoose.model('IplEvent');

const _err = require('../../shared/helpers/error');
const response = require("../../shared/middlewares/response");

module.exports = {

    async getIplEvents(req, res){
        try{
            let bookingId = await IplBooking.findOne({season: req.params.season}).select('_id').lean();

            if(!bookingId)
                throw _err.createError('Not Found', 'Request data not found');

            let booking = await IplEvent.find({ipl_booking_id: bookingId._id});
            response.ok(res, booking);
        }catch(err){
            response.error(res, err);
        }
    }
}