const user= require('../models/user');

exports.signup= (req, res)=>
{
    console.log(req.body);

const {name, email, password}= req.body;   

user.findOne({email}).exec((err, user)=>  //User existes or not and if not
{
    if(user)
    {
        return res.status(400).json({error:"User exists with this email"});
    }
    let newUser= new user({name, email, password}); //creating new user
    newUser.save((err, success)=>
    {
        if(err)
        {
            console.log("error to signup: ", err);
            return res.status(400), json({error: err})
        }
        res.json({
            message:" successful signup "
        })
    })
});

}