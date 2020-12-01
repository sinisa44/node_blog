const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

exports.database = () => { 
    mongoose.connect(DB, {
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
    }).then( () => console.log('Database connection successful'))
    .catch( err => console.log(err))
}