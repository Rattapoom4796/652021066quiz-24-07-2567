const express=require('express');
const app=express();
const PORT=process.env.PORT || 3066

console 


app.use(express.json());
app.use(express.urlencoded({extended : true}))

const  Write=require('./routes/Write');
const  Reads=require('./routes/Reads');
/*const  Read=require('./routes/Read');*/
const  Update=require('./routes/Update');
const  Delete=require('./routes/Delete');

app.use('/in',Write);
app.use('/sels',Reads);
/*app.use('/sel',Read);*/
app.use('/up',Update);
app.use('/dl',Delete);

app.use('/',function(req,res,next){
    res.sendStatus(404);
});

app.listen(PORT,()=>
    console.log('Server running on port:' + PORT+ '066')
);





