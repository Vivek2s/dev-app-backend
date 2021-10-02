const mongoose = require('mongoose');
const UserSSO = mongoose.model('UserSSO');

module.exports = {

    async getSSOConfig(orgId){
       return await UserSSO.findOne({ organisation: orgId }).lean()
    }
}