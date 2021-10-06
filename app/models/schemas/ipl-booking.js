const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { TEAM_LIST } = require('./../../../database/seed-data/team');

const IplBookingSchema = new Schema(
    {
        teams:[
            {
                name: {
                    type: String,
                    enum: TEAM_LIST,
                    required: true
                },
                palyers_name:[
                    {
                        type: String,
                        default: null
                    }
                ],
                captain: {
                    type: String,
                    default: null
                },
                vice_captain: {
                    type: String,
                    default: null
                }
            }
        ],
        season:{
            type: String,
            required: true,
            unique: true
        },
        country: {
            type: String,
            default: null
        },
        theme:{
            type: String,
            default: null
        },
        configuration:{
            type: Object,
            default: null
        }
    },{
        timestamps: true
    }
)

module.exports = IplBookingSchema;