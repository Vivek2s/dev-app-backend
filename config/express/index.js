'use strict'

const bodyParser = require('body-parser');

const preload = require('./preload');
const ACTIVE_APIS = require('./api');

const { requestLogger } = require('../logger');
const self = module.exports =   {

    preloadAPIFiles() {
        // ACTIVE_APIS.forEach(version => preload(version));
        return self;
    },

    setupApp (app) {
        app.disable('x-powered-by');
        app.set('env', process.env.ENV);
        app.use(requestLogger);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        return self;
    },

    setupRouters(app, routers) {
        routers.forEach(router => {
            // console.log(router.router)
            app.use(router.mountPoint, router.router)
        });
        return self;
    },

}