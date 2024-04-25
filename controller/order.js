

const Order = require("../model/orderSchema");


const Createorder = async (req, res) => {
  try {
    const { userInfo, cartItems, totalPrice, paymentMethod } = req.body;

    // Check if required fields are missing or invalid
    if (!userInfo || !userInfo.email || !cartItems || !totalPrice || !paymentMethod) {
      return res.status(400).json({ message: 'Missing required fields or invalid data' });
    }

    const order = new Order({
      userInfo: userInfo,
      paymentMethod: paymentMethod,
      cartItems: cartItems,
      totalPrice: totalPrice,
      email: userInfo.email
    });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
};
const getorder = async (req, res) => {
  try {
    const user = await Order.findOne({ "userInfo.email": req.params.email });
    if (!user) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).send(user.cartItems);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getallOrder= async (req, res) => {
  const orderList = await Order.find()
  res.json(orderList)
}

const deleteOrder= async (req, res) => {
  try {
      await Order.findByIdAndDelete(req.params.userId);
      res.json({ message: 'order deleted successfully' });
  } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Server error' });
  }
};


module.exports = { Createorder,getorder,getallOrder,deleteOrder};
