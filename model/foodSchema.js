const mongoose = require('mongoose')


const foodSchema = mongoose.Schema({
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    name:{
        type:String,
    },
   
    address:{
        type:String,
    },
    location:{
        type:String,
    },
    time:{
        type:String,
    },
    title: {
        type:String,
        required: true,
    },
    cover:{
        type:Array,
        required: true,
    },
   place:{
    type:String,
    required: true,
    // index: true,
   },
   subtitle: {
    type:String,
    required: true,
    // index: true,
},
fooditems: [
    {
    foodname:{
    type:String,
    
},
  foodimage:{
    type:Array,
   
  },
  price:{
    type:String,
   
},
itemrating:{
    type:String,
   
},
}
]
});
const food=mongoose.model('food',foodSchema )
module.exports=food
