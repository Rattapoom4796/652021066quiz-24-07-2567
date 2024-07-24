'use strict';
const express=require('express');
const crypto =require('crypto');
const writeRoute = express.Router();
const connection = require('../db');

writeRoute.post('/std',function(req,res,next){
    connection.execute("INSERT INTO  students  (id,first_name,last_name,email,major,enrollment_year) VALUES (?,?,?,?,?,?),",
        [req.body.id ,req.body.first_name ,req.body.last_name,req.body.email,req.body.major ,req.body.enrollment_year])
        .then(()=>{
            console.log('ok');
            res.status(201).send("insert Successfully.");
        }).catch((err)=>{
            console.log(err);
            res3end    
        });
        
});

module.exports = writeRoute;