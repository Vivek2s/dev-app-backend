'use strict';

require('./db');
const expressConfig = require('./express');
expressConfig.preloadAPIFiles();

const { getConfiguredRouters } = require('./express/route-configurator');

const passport = require('passport');
const auth = require('./auth')


module.exports = (app)=>{
    
    const ACTIVE_ROUTERS = getConfiguredRouters();

    expressConfig
        .setupApp(app)
        .setupRouters(app, ACTIVE_ROUTERS)
    
    auth
        .initializeOauthServer(ACTIVE_ROUTERS)
        .configure({
            name: 'passport',
            driver: passport
        })
}