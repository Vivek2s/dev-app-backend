"use strict";

const response = require("../../../shared/middlewares/response");
const seeders = require("../../../../database/seeds/index");

module.exports = {
  
    async seedBasic(req, res) {
        try {
        await seeders.run(null, true);
        response.created(res, { message: "Basic Seeds completed" });
        } catch (err) {
        response.error(res, err);
        }
    },
}