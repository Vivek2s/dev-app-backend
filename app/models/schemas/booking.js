const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
    {
        category:{
            type: String,
            enum: [ 'movie', 'sports', 'events']
        },
        sub_category:{
            type: Schema.Types.ObjectId,
            required: true,
            refPath: 'onModel'
        },
        onModel:{
            type: String,
            required: true,
            enum: [ 'IplBooking']
        },
        theme:{
            type: String
        },
        configuration:{
            type: Object
        }
    },{
        timestamps: true
    }
)

module.exports = BookingSchema;

