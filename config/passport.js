const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = function (passport) {
    passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, (name, password, done) => {
        User.findOne({ name: name })
            .then((user) => {
                if (!user) {
                    return done(null, false, { message: 'User not found!' });
                }
                console.log(password);
                console.log(user.password);
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    console.log(">>>", isMatch);
                    if (err) {
                        throw err;
                    }
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Incorrect password!' });
                    }
                })
            })
            .catch((err) => console.log(err));
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}

