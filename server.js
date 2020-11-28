const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:path.join(__dirname, './config.env')});
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE.replace( '<password>', process.env.PASSWORD);

mongoose.connect(DB, {
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then( () => console.log('Database connection successful'))
  .catch( err => console.log(err))

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(`app running on port ${PORT}`));


