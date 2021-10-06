const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTicketSchema = new Schema(
    {   
        user_type:{
            type: String,
            enum: [ 'visitor', 'user'],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        event_id: {
            type: Schema.Types.ObjectId,
            ref: 'IplEvent',
        },
        seat:[
            {
                row:{
                    type: String,
                    required: true
                },
                number: Number,
            }
        ],
        booking_status:{
            type: String,
            enum: [ 'initiate', 'locked', 'process', 'complete']
        }
        
    },{
        timestamps: true
    }
)

module.exports = UserTicketSchema;