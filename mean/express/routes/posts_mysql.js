const express=require('express');

const router = express.Router();


const connection = require('../db_config_mysql');
//const connection = require('../db_config_mongo');

//const sqlConst = require('../sql_mysql');

//const Post = require('../models/Post');

router.get('/list',(req,res) => {
    console.log('get all employees request');
    const sql = "select * from employee";
    connection.query(sql,function(err,result){
        if(err) {
            console.error(err);
            res.send('unable to list employee');
        }
        else {
            console.log('res from list ' + result);
            res.send(result);
        }
    });
    

});

router.get('/list/:id',(req,res) => {
    console.log('specific get request');
    
    try {
        const id = req.params.id;
        const sql = "select * from employee where id = " + id;
        connection.query(sql,function(err,result){
            if(err) {
                console.error(err.json());
                res.send('unable to add employee');
            }
            else {
                console.log('res from get  ' + result);
                res.send(result[0]);
            }
        });
    } catch(err) {
        res.json({
            message : err
        });
    }

});

router.delete('/delete/:id',async (req,res) => {
    console.log('specific delete request');
    
    try {
        const idQuery = req.params.id;
        const sql = "delete from employee where id = " + idQuery;
        connection.query(sql,function(err,result){
            if(err) {
                console.error(err.json());
                res.send('unable to delete employee');
            }
            else {
                console.log('res from delete ' + result);
                res.send(result);
            }
        });
    } catch(err) {
        res.json({
            message : err
        });
    }


    //res.send('We are at posts');
});

router.put('/update/:id',(req,res,next) => {
    console.log('specific update request');
    
    try {
        console.log('req.body : ' + req.body);
        const id = req.params["id"];
        const name = req.body.name;
        const gender = req.body.gender;
        console.log(id+name+gender);
        const sql = "update employee set name = ? , gender = ? where id = ?" ;
        console.log('sql update: ' + sql);
        connection.query(sql,[name,gender,id],function(err,result){
            if(err) {
                console.error(err);
                res.send('unable to update employee');
            }
            else {
                console.log('res from update ' + result);
                res.send(result);
            }
        });
    } catch(err) {
        res.json({
            message : err
        });
    }
});

router.patch('/update/:id',(req,res,next) => {
    console.log('specific patch request');
    console.log(req.body);
    try {
        const id = req.params.id;
        const id1 = req.body.id;
        const name = req.body.name;
        const gender = req.body.gender;
        console.log(id+id1+name+gender)
        const sql = "update employee set name = ? , gender = ? where id = ?" ;
        console.log('sql update: ' + sql);
        connection.query(sql,[name,gender,id],function(err,result){
            if(err) {
                console.error(err);
                res.send('unable to update employee');
            }
            else {
                console.log('res from patch ' + result);
                res.send(result);
            }
        });
    } catch(err) {
        res.json({
            message : err
        });
    }
});

router.post('/add',(req,res) => {
    console.log('post request' + req.body.id + req.body.name + req.body.name);
    try {
        const idQuery = req.params.id;
        const sql = "insert into employee (id,name,gender) values ("+req.body.id + "," + req.body.name + ", " + req.body.gender + ")";
        console.log('sql post: ' + sql);
        connection.query(sql,function(err,result){
            if(err) {
                console.error(err);
                res.send('unable to post employee');
            }
            else {
                console.log('res from  post ' + result);
                res.send(result);
            }
        });
    } catch(err) {
        res.json({
            message : err
        });
    }
});

module.exports = router;