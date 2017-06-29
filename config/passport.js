var passport = require('passport');
var User = require('../models/User');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser( function (user , done){
  done(null , user.id)
});

passport.deserializeUser( fucntion (id , done){
  User.findById(id , function( err , user){
    done(err , user)
  });
});
