"use strict";

const env = require('../../../config/environments');

const passport = require('passport');
const _err = require('../helpers/error');
const response = require('./response');

module.exports = (role = '') => {

        // role = role && env.ENV == 'local' ? '' : role;
    return (req, res, next) => {
        try {

            if(env.ENV == 'development')
                    return;
            
            switch (role) {

                case '':
                    passport.authenticate('anyBearer', { session: false })(req, res, next);
                    break;
                case 'client':
                    passport.authenticate('clientBasic', { session: false })(req, res, next);
                    break;

                case 'basic':
                    passport.authenticate('basic', { session: false })(req, res, next);
                    break;

                default:
                    throw _err.createError('UNSUPPORTED_STRATEGY');
            }
        }

        catch (err) {
            response.error(res, err);
        }
    }
};