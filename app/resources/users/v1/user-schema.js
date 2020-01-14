'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        'email': {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        'password': {
            type: String,
            required: true,
            set: _hashPassword
        },
    }
)

module.exports = UserSchema;