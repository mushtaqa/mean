const express=require('express');

const router = express.Router();

const mongoose = require('mongoose');


//const connection = require('../db_config_mysql');
const connection = require('../db_config_mongo');

//const Post = require('../models/Post');

const PostSchema = mongoose.Schema({
    id: Number,
    name : String,
    gender : String
});

var Post = mongoose.model('Posts',PostSchema); 


router.get('/list',(req,res) => {
    console.log('get all employees request');
    
    try {

        const posts = Post.find();
        //res.json(posts);
        //res.send(posts);
        Post.find(function(err,response){
            res.send(response)
        });
    } catch(err) {
        res.json({
            message : err
        });
    }

});

router.get('/list/:id',(req,res) => {
    console.log('specific get request');
    
    try {
        //const posts = Post.find();
        //console.log('response ' + posts);
        //res.send(posts);
        const idQuery = req.params.id;
        console.log('idQuery ' + idQuery);
        Post.findOne({id : idQuery},function(err,response){
            console.log('response ' + response);
            res.send(response)
        });
    } catch(err) {
        res.json({
            message : err
        });
    }


    //res.send('We are at posts');
});

router.delete('/delete/:id',async (req,res) => {
    console.log('specific delete request');
    
    try {
        const idDelete = req.params.id;
        console.log('id ' + idDelete);
        //Post.remove({id : idDelete});
        const deletePost = await Post.deleteOne({id : idDelete});
        res.json(deletePost);
    } catch(err) {
        res.json({
            message : err
        });
    }


    //res.send('We are at posts');
});

router.patch('/update/:id',(req,res) => {
    console.log('specific update request');
    
    try {
        //const posts = Post.find();
        //console.log('response ' + posts);
        //res.send(posts);
        const idDelete = req.params.id;
        Post.updateOne({id : idDelete},
            {
                name : req.body.name,
                gender : req.body.gender
            },
            function(err,response){
            res.send({
                starus:200,posts: response
            })
        });
    } catch(err) {
        res.json({
            message : err
        });
    }
});

router.post('/add',(req,res) => {
    console.log('post request' + req.body.id + req.body.name + req.body.name);
    const post = new Post({
        id : req.body.id,
        name : req.body.name,
        gender : req.body.gender
    });
    post.save().then(
        data=> {res.json(data);})
    .catch(err=> {
        res.json({ message: err });
    });
    //res.send('We are at posts');
});

module.exports = router;