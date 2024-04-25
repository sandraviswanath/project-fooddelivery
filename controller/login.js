const bcrypt = require('bcrypt');

const fooduser = require('../model/userSchema');

// const Login=async(req,res) => {
//     const {email,password}=req.body;
//     const dbemail=await fooduser.findOne({email})
//     if (dbemail){
// if(dbemail.email=== email && (await bcrypt.compare(password,dbemail.password))){
//     console.log('login success')
//     res.json('login success')

//     // Assuming `dbemail` contains the user object


// }
// else{
//     console.log('login failed');
//     res.json('login failed')
// }
//     }
//     else{
//         console.log('no data in db');
//         res.json('no data in db');
//     }
//     // const salt=await bcrypt.genSalt(10)
//     // const hashedPassword=await bcrypt.hash(Password,salt)
//     // const userdetail=await User.create({Name,Email,Password:hashedPassword})
//     // res.json(userdetail)
// }


const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const dbemail = await fooduser.findOne({ email });
      if (dbemail) {
        if (dbemail.email === email && (await bcrypt.compare(password, dbemail.password))) {
          console.log('Login success');
          res.json({ user: dbemail }); // Send the user object in JSON format
        } else {
          console.log('Login failed');
          res.status(401).json({ error: 'Invalid email or password' }); // Send an appropriate error response
        }
      } else {
        console.log('No data in db');
        res.status(404).json({ error: 'User not found' }); // Send an appropriate error response
      }
    } catch (error) {
      console.log('Login error:', error);
      res.status(500).json({ error: 'Internal server error' }); // Send an appropriate error response
    }
  };
 
  
module.exports =Login