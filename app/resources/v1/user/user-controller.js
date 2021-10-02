'use strict'

const _userSSOHelper = require('./../../../shared/helpers/user-sso');

const _err = require('./../../../shared/helpers/error');
const response = require("./../../../shared/middlewares/response");

module.exports = {

    async getUserDetails(req, res){
        try{
            response.ok(res, {user: true});
        }catch(error){
            response.error(res, error);
        }
    },

    async getOrganisation(req, res){
        try{
            let userSSO = await _userSSOHelper.getSSOConfig(req.params.org)

            if(userSSO){
                        response.ok(res, {sso: true});       
    }
            else 
                response.ok(res, {sso: false});

        }catch(error){
            response.error(res, error);
        }
    }
}