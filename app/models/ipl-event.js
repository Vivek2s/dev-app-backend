"use strict";

const mongoose = require('mongoose');
const IplEventSchema = require('./schemas/ipl-event');

const _bookingHelper = require('./../shared/helpers/booking');

IplEventSchema.pre('save', async function(next){
    
    let doc = await this.constructor.findOne({ title: this.title, event_start: new Date(this.event_start)});
    if(doc){
        var err = new Error('Ipl Event Duplicate');
        next(err);
    }

    let count = this.constructor.find({ ipl_booking_id: this.ipl_booking_id}).count();
    this.match_number = count+1;
    this.slug_id = _bookingHelper.generateSlug(this.title);
    
    next();
})

module.exports = mongoose.model('IplEvent', IplEventSchema);