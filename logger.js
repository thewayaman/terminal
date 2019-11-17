var express=require('express');
var app=express();
var cors=require('cors')
var fs = require('fs');
app.use(cors());
var events=require('events');
var em= new events.EventEmitter();
var bodyParser=require('body-parser');
var mongojs=require('mongojs');
var db=mongojs('exchange',['nse','nifty','banknifty','order']);
app.use(express.static(__dirname));


//logging entry in file

var msg="Directory Name: "+ __dirname
+ "\n" +

"StartTimeStamp: "+(new Date(Date.now()+"\n"))+

"File Name: "+__filename+"\n"+

"Process Version: "+process.version+"\n"+

"Process Time: "+process.uptime()+"\n"+

"Memory Use: "+JSON.stringify(process.memoryUsage())+"\n";

var write=function(){

  try{

    fs.appendFile("C:\\demon\\logfile.txt",
msg+"***********************************"

    +"\n"+"\n"
, 

    function(err){  

    });

  }

  catch(err){}

};




var logger=function(){
    em.setMaxListeners(50);
    em.on('error',function(err){

    });

    em.on('event1',write);

    em.emit ('event1');

  }; 


//Calling 36 documents from collection stock

app.get('/stock',function(req,res){
    db.nse.find().limit(36,function(err,docs){
        res.json(docs);
    });
    logger(); 
});

//Calling 16 documents from collection nifty
 
app.get('/nifty',function(req,res){
    db.nifty.find().limit(6,function(err,docs){
        res.json(docs);
    });
    logger(); 
});

//Calling 16 documents from collection banknifty

app.get('/banknifty',function(req,res){
    db.banknifty.find().limit(6,function(err,docs){
        res.json(docs);
    });
    logger(); 
});

//My recent orders

app.get('/recentOrderList', function (req, res) {

    db.order.find( ).sort({_id:-1}).limit(6,function (err, docs) { 
    res.json(docs);   
    
    });
    logger(); 
});

//Order List

app.get('/orderList', function (req, res) {
    db.order.find( function (err, docs) {    
    res.json(docs);
    });
    logger();   
});

//New Order

app.get('/addOrder/:data', function (req, res) {
    var data = JSON.parse(req.params.data);    
    db.order.insert(data);    
    db.order.find({}, function (err, data) {
    res.send(data)
    });
    logger();  
})



app.listen(8081);