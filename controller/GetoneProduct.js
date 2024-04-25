// const Collection = require("./CollectionSchema")
const food = require("../model/foodSchema")


const GetOneproduct= async(req,res)=>{
    const getid =req.params.id
    const getOne = await food.findById({_id:getid})
    res.json(getOne)
}
module.exports=GetOneproduct