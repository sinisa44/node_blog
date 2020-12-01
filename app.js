const express = require('express');
const path = require('path');
const viewRouter = require('./routes/viewRouter');
const userRouter = require('./routes/userRouter');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const dotenv = require('dotenv');

const app = express();

//dotenv config
dotenv.config({path:path.join(__dirname, './config.env')});

//passport config
require('./utils/passport')(passport)

if( process.env.ENV_TYPE === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

//Add view engine PUG
app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views' ) )
app.locals.pretty = true;

//body parser 
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
//set public folder visible
app.use(express.static( path.join( __dirname, 'public') ) );


//session and passport middleware
app.use(passport.initialize());
app.use(passport.session())

//routes
app.use('/', viewRouter);
app.use('/user', userRouter);
// app.use()


module.exports = app;