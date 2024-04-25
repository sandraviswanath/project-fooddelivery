const express = require("express");


const FoodItem = require("../model/fooditemSchema");

const customer = require("../model/userSchema");
const Wishlist = require("../model/WishlistSchema");

const router = express.Router();

const CreateWishlist = async (req, res) => {
  try {
    const { email, product } = req.body;
    const user = await customer.findOne({ email: email });
    let cart = await Wishlist.findOne({ user: user });
    if (cart) {
      cart = await Wishlist.updateOne(
        { user: user },
        {
          $push: {
            products: product,

          },
        }
      );
    } else {
      cart = Wishlist.create({
        user: user,
        products: [product],
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getWishlist = async (req, res) => {
  try {
    const user = await customer.findOne({ email: req.params.email  });
    const cartItems = await Wishlist.findOne({ user:user });
    res.status(200).send(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateWishlist = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedItem = await Wishlist.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).send("Item not found in cart");
    }
    res.status(200).send(updatedItem);
  } catch (error) {
    console.error("Error updating item quantity:", error);
    res.status(500).send("Internal Server Error");
  }
};


const deleteWishlist = async (req, res) => {
  try {
    const productId = req.params.id;
    const userEmail = req.params.email;

    // Find the user based on the email
    const user = await customer.findOne({ email: userEmail });

    // Find the cart associated with the user
    const cart = await Wishlist.findOne({ user: user });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the product with the provided id from the cart in the database
    cart.products = cart.products.filter(item => item._id !== productId);
    await cart.save();

    // Respond with a success message
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
};




const deleteAllwishlist= async (req, res) => {
  try {
  const userId = req.params.userId;

 
    // Delete all cart items associated with the user
    const deletewishlist=await Wishlist.deleteMany({ userId: userId });
    res.status(200).json({ message: 'All data deleted successfully!' });
  } catch (error) {
    console.error('Error deleting all data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { CreateWishlist, getWishlist, updateWishlist, deleteWishlist,deleteAllwishlist};
