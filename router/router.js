const express =require('express')
// const CreateItem = require('../controller/DeliveryItem')
// const getItem = require('../controller/DeliveryItem')

const { Createfood, getfood,updatefood,deletefood, searchfood } = require('../controller/food')
const {signup,getsignup,deleteUser, getallSignup} = require('../controller/signup')
const Login = require('../controller/login')
const getonePlace = require('../controller/getplace')
const GetOneproduct = require('../controller/GetoneProduct')
const { CreateCart, getCart, updateCart, deleteCart, deleteAll} = require('../controller/Cart')
// const { orderdata,myorderdata } = require('../controller/order')
const { Createfooditems,getfooditems, deletefooditems, updatefooditems } = require('../controller/fooditem')

const token = require('../Midllewares/Token')

const { getAdminsignup, Adminsignup } = require('../controller/AdminSignup')
const AdminLogin = require('../controller/Adminlogin')
const { Createorder, getorder, getallOrder, deleteOrder } = require('../controller/order')
const { CreateWishlist, getWishlist, deleteWishlist, deleteAllwishlist } = require('../controller/Wishlist')
const updateUser = require('../controller/forgotpassword')




const router =express.Router()




// app.get('/api/protected-route', protect, (req, res) => {
//   // This route is protected, only accessible with a valid token
// });


// router.route('/deliveryItem').post(CreateItem)
// router.route('/getitems').get(getItem)


router.route('/getplace/:place').get(getonePlace)
router.route('/getproduct/:id').get(GetOneproduct)
router.route('/signup').post(signup)
router.route('/getsignup/:email').get(getsignup)
router.route('/getallsignup').get(getallSignup)
router.route('/deleteuser/:userId').delete(deleteUser)
router.route('/updateuser/:email').patch(updateUser)


router.route('/login').post(Login)
router.route('/food').post(Createfood)
router.route('/foodlist').get(getfood)
router.route('/updatefood/:id').patch(updatefood)
router.route('/delete/:id').delete(deletefood)
router.route('/food/search').get(searchfood);

router.route('/createcart').post(CreateCart)
router.route('/getcart/:email').get(getCart)
// router.route('/getcart').get(getCart)
router.route('/updatecart/:id').patch(updateCart)
router.route('/deletecart/:id/:email').delete(deleteCart)
router.route('/deleteall/:email').delete(deleteAll)


// router.route('/orderdata').post(orderdata)
router.route('/createorder').post(Createorder)
router.route('/getorder/:email').get(getorder)
router.route('/getallorder').get(getallOrder)
router.route('/deleteorder/:userId').get(deleteOrder)



router.route('/wishlist').post(CreateWishlist)
router.route('/getwishlist/:email').get(getWishlist)
router.route('/deletewishlist/:id/:email').delete(deleteWishlist)
router.route('/deleteallwishlist/:email').delete(deleteAllwishlist)

router.route('/createfooditems').post(Createfooditems)
router.route('/getfooditems').get(getfooditems)
router.route('/user/:userId/fooditems/:foodItemId').delete(deletefooditems)
router.route('/updatefooditems/:userId/:foodItemId').put(updatefooditems)
router.route('/getadminsignup').get(getAdminsignup)
router.route('/adminsignup').post(Adminsignup)
router.route('/adminlogin').post(AdminLogin)




module.exports= router


