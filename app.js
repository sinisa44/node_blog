const express = require('express');
const path = require('path');
const homeRouter = require( './routes/homeRouter' );
const bodyParser = require('body-parser')
const morgan = require('morgan');
const app = express();


if( process.env.ENV_TYPE === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

//Add view engine PUG
app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views' ) )
app.locals.pretty = true;

//set public folder visible
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/home', homeRouter );

// app.use()


module.exports = app;