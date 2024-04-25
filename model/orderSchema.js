
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userInfo: {
    type: Object,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  cartItems: {
    type: Array,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;




// const orderSchema = new mongoose.Schema({
//   userInfo: {
//     type: Object,
//     required: true,
//     validate: {
//       validator: (userInfo) => {
//         return userInfo.email !== null;
//       },
//       message: 'Email cannot be null',
//     },
//   },
//   paymentMethod: {
//     type: String,
//     required: true,
//   },
//   cartItems: {
//     type: Array,
//     required: true,
//   },
//   totalPrice: {
//     type: Number,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// orderSchema.index({ "userInfo.email": 1 }, { unique: true, sparse: true });

