
const bcrypt=require('bcrypt');
const user = require('../model/userSchema');

const CreateUser =async(req,res)=>{
    const {name,email,password}=req.body;
    const salt =await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    const stddetails =await user.create({
        name,email,password :hashedpassword
    })
    res.json(stddetails)
} 
module.exports =CreateUser;