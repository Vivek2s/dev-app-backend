'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSSOSchema = new Schema(
    {
        'user':{
            type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
        },
        'organisation': {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        'config': {
            protocol:{
                type: String,
                required: true
            },
            path:{
                type: String,
               required: true
            },
            entryPoint: {
                type: String,
                required: true,
            },
            issuer: {
                type: String,
                required: true,
            },
            cert:{
                type: String,
                required: true,
            },
        },
    },
    {
        timestamps: true
    }
)

module.exports = UserSSOSchema;