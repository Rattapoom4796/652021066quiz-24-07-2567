'use strict';
const express=require('express');
const crypto =require('crypto');
const deleteRoute = express.Router();
const connection = require('../db');

deleteRoute.delete('/std/:id',function(req,res,next){
    connection.execute("DELETE FROM students WHERE id=?,",
        [req.params.id]).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        });
        res.end();
});

module.exports = deleteRoute;