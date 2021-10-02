'use strict';

const mongoose = require('mongoose');
const UserSSO = mongoose.model('UserSSO');

const _err = require('./../../../shared/helpers/error');
const response = require("./../../../shared/middlewares/response");

module.exports = {

    async createSSOConfig(req, res){
        try{
            let userSSO =   await UserSSO.create(req.body);
            response.ok(res, {config: userSSO});
        }catch(err){
            console.log(err);
            response.error(res, error);
        }
    }
}