const User = require( './../models/User' );
const bcrypt = require('bcrypt');
const passport = require('passport')


exports.login = ( req, res ) => {
    res.status(200).json(req.body);
}

exports.register = async ( req, res ) => {

    const {username, password, email} = req.body;

    console.log(req.body);

    if( !username  || !password || !email ) {
        res.status(422).json({
            status:"fail",
            message: "please fill all field"
        })
    }

    try {
        // const newUser = await User.create(req.body);  
        const newUser = new User( req.body );
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        await newUser.save();
        res.redirect('/login')

    } catch (error) {
        res.status(400).json({
            message:'fail',
            error
        })
    }
    
}

exports.login = ( req, res, next ) => {
  passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect:'/register',
      failureFlash:false
  })(req,res,next)
}

exports.logout = (req, res ) => {
    req.logout();
    res.render('/login')
}