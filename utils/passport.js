const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');


const passport = passport => {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            //match user
            User.findOne({email:email})
                .then( user => {
                    if( !user ) {
                        return done( null, false( {mesasge: 'email not registered'}))
                    }

                    //match pass
                    bcrypt.compare( password, user.password, ( err, isMatch ) => {
                        if( err ) throw err;

                        if( isMatch ) {
                            return done( null, user );
                        } else {
                            return done( null, false, {message: 'password incorect'})
                        }
                    })
                }).catch( err => console.log( err ))
        })
    )
    passport.serializeUser( (user, done ) => {
        done( null, user.id )
    });

    passport.deserializeUser( (id, done) => {
        User.findById( id, ( err, user ) => {
            done( err, user )
        })
    })
}

module.exports = passport;