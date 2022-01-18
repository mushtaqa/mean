const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb://localhost:27017/sep-dec-21-ng-db',()=> 
    console.log('conected to mongo db')
);
mongoose.connection.on("connected",()=> console.log('checking whether connection event trigger to mongo db'));


module.exports = connection;