const mongoose= require('mongoose');
const crypto= require('crypto');

//Schemas

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required:true,
},
email:
{
    type: String,
    required:true,
    unique:true,
},

post:
{
    type: String,
    required:true,
  
},

 }, {timestamp :true})

module.exports= mongoose.model('user', userSchema)