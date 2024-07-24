'use strict';
const express=require('express');
const crypto =require('crypto');
const readRoute = express.Router();
const connection = require('../db');

readRoute.get('/std',function(req,res,next){
    connection.execute( 'SELECT * FROM students ;')
        .then((result)=>{
            var rawData=result[0];
            res.send(rawData);
        }).catch((err)=>{
            console.log(err);
            res.end();
        });
});
       

module.exports = readRoute;