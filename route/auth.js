const express = require('express');
const router= express.Router();


//import controller
const {signup} = require("../controllers/auth");

router.post('/signup', signup); //Api route with post method with path.with controller. Controller is used to minimize code in route.

module.exports= router;