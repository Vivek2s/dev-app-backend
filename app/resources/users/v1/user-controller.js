'use strict'

const _err = require('./../../../shared/helpers/error');
const response = require("./../../../shared/middlewares/response");

module.exports = {

    async getUserDetails(req, res){
        try{
            console.log('...............testttttttttttttttt')
            response.ok(res, {user: true});
        }catch(error){
            response.error(res, error);
        }
    }
}