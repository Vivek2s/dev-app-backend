const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingEventSchema = new Schema(
    {
        booking:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Booking'  
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
        },
        event_start:{
            type: Date,
            required: true
        },
        event_end:{
            type: Date,
            required: true
        },
        booking_start:{
            type: Date,
            required: true
        },
        booking_end:{
            type: Date,
            required: true
        },
        custom_data:{
            type: Object
        }
    },{
        timestamps: true
    }
)

module.exports = BookingEventSchema;

