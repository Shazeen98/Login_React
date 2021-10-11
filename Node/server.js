const express =require('express');
const app=express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

require("dotenv").config({
    path:'./config/config.env'
});

const signInRouter =require('./route/signInRoute');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/signIn',signInRouter);

app.listen(PORT,console.log(" Server running..."))
