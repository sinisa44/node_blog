const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username is required'],
        minlength:3
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:6
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail, 'email must be unique']
    }
});

const User = mongoose.model( 'User', userSchema );

module.exports = User;