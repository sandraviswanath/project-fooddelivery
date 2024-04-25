const bcrypt=require('bcrypt');
const Admin = require('../model/AdminSchema');


const Adminsignup = async(req,res)=>{
    const {name,email,password,phone}=req.body;
    const existinguser = await Admin.findOne({email});
if(existinguser){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const userdetails = await Admin.create({
       name,email,phone,password :hashedpassword

})
res.json(userdetails)
}


const getAdminsignup=async(req,res)=>{
    const signupdetails = await Customer.find()
    res.json(signupdetails)
}
module.exports={Adminsignup,getAdminsignup}