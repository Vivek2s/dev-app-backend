const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IplEventSchema = new Schema(
    {
        ipl_booking_id:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'IplBooking'  
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
        },
        team_a: {
            name: { type: String, default: null, required: true},
            captain: { type: String, default: null},
            vice_captain: { type: String, default: null},
            playing_11: [ { type: String, default: null} ]
        },
        team_b: {
            name: { type: String, default: null, required: true},
            captain: { type: String, default: null},
            vice_captain: { type: String, default: null},
            playing_11: [ { type: String, default: null} ]
        },
        match_number: { type: Number, default: 0},
        team_winner: { type: String, default: null},
        organised: { type: String, default: null}, 
        ticket_price: { type: Number, default: 0},
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
        total_booked:  { type: Number, default: 0},
        seat_row:[{
                    type: String,
                    required: true
                }],
        total_seat_number:  { type: Number, default: 0},
        slug_id: { type: String, default: null},
        custom_data:{
            type: Object
        }
    },{
        timestamps: true
    }
)

module.exports = IplEventSchema;

