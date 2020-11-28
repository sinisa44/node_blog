const express = require('express');
const path = require('path');
const viewRouter = require('./routes/viewRouter');
const userRouter = require('./routes/userRouter');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

if( process.env.ENV_TYPE === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}

//Add view engine PUG

app.set('view engine', 'pug')
app.set('views', path.join( __dirname, 'views' ) )
app.locals.pretty = true;

app.use(bodyParser.json());
//set public folder visible
app.use(express.static( path.join( __dirname, 'public') ) );

//routes
app.use('/', viewRouter);
app.use('/user', userRouter);
// app.use()


module.exports = app;