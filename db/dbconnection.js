const mongoose = require('mongoose');

//connect to DB
mongoose.connect(process.env.DATABASE, 
    {
        useNewUrl:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=> console.log("Connected to DB"))
    .catch(err => console.log("Connection error, DB not connected", err));