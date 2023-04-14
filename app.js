const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error',err=>{
    console.log('Connection Failed.');
});

mongoose.connection.on('connected',connected=>{
    console.log('Connected successfully...');
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);

module.exports = app;