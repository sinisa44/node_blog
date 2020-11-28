const User = require( './../models/User' );
const bcrypt = require('bcrypt');

exports.login = ( req, res ) => {
    res.status(200).json(req.body);
}

exports.register = async ( req, res ) => {
    try {
        // const newUser = await User.create(req.body);  
        const newUser = new User( req.body );

    
        res.status(200).json({
            data:newUser
        });    
    } catch (error) {
        res.status(400).json({
            message:'fail',
            error
        })
    }


    
}


