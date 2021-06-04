const express = require ('express');
const cors = require ('cors');

const app = express();

require('dotenv').config(); // to use env variables;
require("./db/dbconnection");

//import routes

const authRoutes= require("./route/auth");

app.use(express.json());  //parsing json data to api of server. Without it it wont be able to get Json data
app.use(cors());   //To give acces to other hosts to this api

//middleware
app.use('/api', authRoutes);

const port = process.env.PORT;
app.listen(port, ()=> 
{
    console.log (`server is running on port : ${port}`);
})