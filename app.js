const express = require('express');
const path = require('path');
const homeRouter = require( './routes/homeRouter' );
const bodyParser = require('body-parser')
const morgan = require('morgan');
const app = express();


if( process.env.ENV_TYPE === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

// app.use(bodyParser);
app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views' ) )

app.use('/home', homeRouter);


// app.use()


module.exports = app;