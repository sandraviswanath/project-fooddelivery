const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
   
    user: {
        type: Object
       
    },
    products: {
       type: Array
    },
  
   
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
