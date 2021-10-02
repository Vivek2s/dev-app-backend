'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const _hash = require('./../../shared/helpers/hash');

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

function _hashPassword(password) {
    return _hash.generateHashSyncFor(password);
}

module.exports = UserSchema;