const express =require('express');
const router =express.Router();
const Controllers = require('../controllers/controllers')

router.post('/',Controllers.signIn);


module.exports =router