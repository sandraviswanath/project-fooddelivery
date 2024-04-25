const mongoose = require("mongoose");

const fooditemSchema = mongoose.Schema({
  email: {
    type: String,
  },

  
  fooditems: [
    {
      foodname: {
        type: String,
      },
      foodimage: {
        type: Array,
      },
      price: {
        type: String,
      },
      itemrating: {
        type: String,
      },
    },
  ],
});
const fooditem = mongoose.model("fooditem", fooditemSchema);
module.exports = fooditem;

