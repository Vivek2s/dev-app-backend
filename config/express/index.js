'use strict'

const cors = require('cors');
const bodyParser = require('body-parser');

const preload = require('./preload');
const ACTIVE_APIS = require('./api');

const { requestLogger } = require('../logger');
const Saml2js = require('saml2js');
//import passport from 'passport';

const self = module.exports =   {

    preloadAPIFiles() {
        ACTIVE_APIS.forEach(version => preload(version));
        return self;
    },

    setupApp (app) {
        app.use(cors());
        app.disable('x-powered-by');
        app.set('env', process.env.ENV);
        app.use(requestLogger);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));



        const passport = require('./../auth/passport/strategies/saml');
        app.use(passport.initialize());
        app.use(passport.session());
        return self;
    },

    setupRouters(app, routers) {
        const passport = require('./../auth/passport/strategies/saml');
        app.get('/login/sso/:id?', passport.authenticate('saml', {
            successRedirect: '/',
            failureRedirect: '/login',
          }), (req, res, next) => {
            return res.redirect('http://localhost:4200');
        });
        
        app.post('/login/sso/callback/:id?', passport.authenticate('saml', {
            failureFlash: true,
            failureRedirect: '/login',
          }), (req, res, next) =>{
              const xmlResponse = req.body.SAMLResponse;

            //   new Saml2js().asObject
          const parser = new Saml2js(xmlResponse);
          req.samlUserObject = parser.toObject();
          console.log(req.samlUserObject, "...", req.user);
          next();
        },
        (req, res) => {
            // console.log(res, req);
            return res.redirect('http://localhost:4200');
        });
        
        routers.forEach(router => {
            // console.log(router.router)
            app.use(router.mountPoint, router.router)
        });
        return self;
    },

}