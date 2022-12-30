import express from 'express';
import User from '../models/Users';

const bcrypt = require("bcryptjs");
const login = express.Router();
export const logout = express.Router();
export const passport =  require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username}).then(user => {
  if(!user){
    // return done(null, false, { message: "Wrong username or password" });

    //To add test data with hashed passwords uncomment below code and comment out the above return statement. Then use the login route with random data

    const isAdmin = false;
    const newUser = new User({ username, password, isAdmin });
                    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => {
                    return done(null, user, { message: "success"});
                })
                .catch(err => {
                    return done(null, false, { message: err });
                });
        });
    });
    }
    else{
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
            return done(null, user, { message: "success" });
        } else {
            return done(null, false, { message: "Wrong username or password" });
        }
      });
  }
  }).catch(err => {
    return done(null, false, { message: err });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function(req, id, done) {
  User.findById(id, function(err, user) {
      if (err) {
          req.session.destroy(function() {
             return done(err)
          })
      }
      else{
      done(null, user);
      }
  });
});

login.post("/", (req, res, next) => {

  passport.authenticate("local", function(err, user, info) {

      console.log(info.message);
      if (err) {
          return res.status(200).json({ errors: err });
      }
      if (!user) {
          return res.status(200).json({ errors: "No user found" });
      }
      req.logIn(user, function(err) {
          if (err) {
              return res.status(200).json({ errors: err });
          }
          return res.status(200).json({ success: `logged in ${user.id}` });
      });
  })(req, res, next);
});

export default login;
