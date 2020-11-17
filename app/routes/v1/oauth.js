"use strict";

const oauth = require("../../resources/v1/oauth");
const isAuthenticated = require("../../shared/middlewares/isAuthenticated")
// Login and register routes are in config/auth/oauth/routes
module.exports = [
  {
    method: "GET",
    path: "/oauth/db/seed",
    handlers: [oauth.db.seedBasic]
  },
  {
    method: "POST",
    path: "/oauth/client",
    handlers: [isAuthenticated("basic"), oauth.user.getClientCredentials]
  },
];
