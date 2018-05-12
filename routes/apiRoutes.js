const express = require('express');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var router = express.Router();
const passport = require('passport')

router.use(passport.initialize())

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  console.log("====================================")
  //check if user is in the DB, if not, add them
  console.log(user.id)
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    //get the user from the DB
    let user = {name: "Sam", id}
    done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: `1096957611995-ngdld110goo2iganmh1srg3sg1sqe3cb.apps.googleusercontent.com`,
  clientSecret: `IOgpfzphjr3ebEBbjbJ7dUYW`,
  callbackURL: "http://127.0.0.1:3001/auth/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    var err = null
    var user = profile._json
    console.log(profile._json)
    return cb(err, user);
    })
  )

router.get('/',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/auth' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = {router, passport}