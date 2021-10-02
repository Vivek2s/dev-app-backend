
const mongoose = require('mongoose');
const UserSSO = mongoose.model('UserSSO');

const passport = require('passport');
const passportSaml = require('passport-saml');
const {MultiSamlStrategy} = require('passport-saml');
const SAML_CONFIG = require('./../../saml-config');
const _userSSOHelper = require('./../../../../app/shared/helpers/user-sso')
const savedUser = [];

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// MultiTenant SAML Strategy
const fetchSamlConfig = (request, done) => {
    const orgId = request.params.id;
    let helper = _userSSOHelper.getSSOConfig(orgId);
    helper.then( userSSO=>{
      console.log('...........', userSSO.config.cert)
      // userSSO.config.cert = JSON.parse(userSSO.config.cert);
      //   console.log(userSSO)
        return done(null, userSSO.config);
    }).catch(err=> {return done(err)})
    // UserSSO.findOne({organisation: orgId }, (err,userSSO)=>{
    //   if (err) {
    //     return done(err);
    //   }
    //   console.log(userSSO)
    //   userSSO.config.cert = JSON.parse(userSSO.config.cert);
    //   console.log(userSSO)
    //   return done(null, userSSO.config);
    // })
};

// saml strategy for passport
const strategy = new MultiSamlStrategy(
    {
      passReqToCallback: true, // makes req available in callback
      getSamlOptions(request, done) {
        fetchSamlConfig(request, done)
      },
    },
    (req, profile, done) => {
      done(null, profile);
    },
);

// SAML strategy for passport -- Single IPD
// const strategy = new passportSaml.Strategy(
//   {
//     entryPoint: SAML_CONFIG.entryPoint,
//     protocol: "http://",
//     issuer: SAML_CONFIG.issuer,
//     path: "/login/callback",
//     cert: SAML_CONFIG.cert,
//   },
//   (profile, done) =>{ 
//       console.log('.....................saml file......', profile)
//       if(!savedUser.includes(profile))
//         savedUser.push(profile)

//       done(null, profile)
//   },
// );

passport.use(strategy);

module.exports = passport;