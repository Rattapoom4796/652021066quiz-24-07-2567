'use strict';
const express=require('express');
const crypto =require('crypto');
const upRoute = express.Router();
const connection = require('../db');

upRoute.put('/std/:id',function(req,res,next){
    connection.execute("UPDATE  students SET first_name=?,last_name=?,email=?,major=?,enrollment_year=?, WHERE id=?,",
        [req.body.first_name ,req.body.last_name,req.body.email,req.body.major ,req.body.enrollment_year ,req.params.id])
        .then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);

        console.log(req.body);
        });
        res.status(200).send("Update Successfully.");
});
upRoute.use('/',function(req,res,next){
    res.sendStatus(404)
})

module.exports = upRoute;