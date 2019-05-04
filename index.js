const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use(require('./api'));

//error handling middleware
app.use(function(err, req, res, next){ 
    //console.log(err)
    res.status(422).send({error: err.message})
});

//http://careerdevsvm-victormontanez.c9users.io:8081/
app.get('/', function(req, res){
    console.log('GET request');
    res.send({name: 'Yoshi'});
});


//listen for request
app.listen(process.env.port || 8081 , function(){
    console.log('now listening for request');
})