'use strict'
let _err = require('./../helpers/error');
let response = require('./../middlewares/response');

let thirdParty = require('./../services/third-party');

module.exports = async(req, res, next)=>{

    let message = await thirdParty();
    try{
        if(message){
            next();
        }
        else{
            throw _err.createError('BAD_REQUEST', 'Login Validation failed');
        }
    }catch(err){
        response.error(res, err);
    }
  
}