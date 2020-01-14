'use strict';

require('./db');
const expressConfig = require('./express');
expressConfig.preloadAPIFiles();

const { getConfiguredRouters } = require('./express/route-configurator');

module.exports = (app)=>{
    
    const ACTIVE_ROUTERS = getConfiguredRouters();

    expressConfig
        .setupApp(app)
        .setupRouters(app, ACTIVE_ROUTERS)
}