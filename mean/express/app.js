const express = require('express');

const app = express();

const cors = require("cors");

//const bodyParser = require('body-parser');

//const Post = require('../models/Post');

//app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//import routes
//const postRoutes = require('./routes/posts_mongo');
const postRoutes = require('./routes/posts_mysql');
app.use('/Posts',postRoutes);

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/

  //const cors = require('cors');

  /*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/
/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

//my sql
//const mysql = require('./db_config');



app.get('/',(req,res) => {
    res.send('We are at home');
});

app.listen(3000);