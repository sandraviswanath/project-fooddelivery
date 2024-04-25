const mongoose=require('mongoose')
const AdminSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}
});
const Admin = mongoose.model('Admin',AdminSchema);

module.exports=Admin;