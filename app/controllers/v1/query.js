'use strict'


const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
const BookingEvent = mongoose.model('BookingEvent');
const IplBooking = mongoose.model('IplBooking');
const IplEvent = mongoose.model('IplEvent');

const _err = require('../../shared/helpers/error');
const response = require("../../shared/middlewares/response");

module.exports = {

    async seedBooking(req, res){
        try{
            let booking = await Booking.create(req.body.post);
            response.ok(res, booking);
        }catch(err){
            response.error(res, err);
        }
    },

    async seedBookingEvent(req, res){
        try{
            let booking = await BookingEvent.create(req.body.post);
            response.ok(res, booking);
        }catch(err){
            response.error(res, err);
        }
    },

    async seedIplBooking(req, res){
        try{
            let booking = await IplBooking.create(req.body);
            response.ok(res, booking);
        }catch(err){
            console.log("my error", err)
            response.error(res, err);
        }
    },

    async seedIplEvent(req, res){
        try{
            let booking = await IplEvent.create(req.body);
            response.ok(res, booking);
        }catch(err){
            response.error(res, err);
        }
    }
}