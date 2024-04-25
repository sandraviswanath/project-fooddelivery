const express=require('express');
const connection = require('./config/Mongo');
const router = require('./router/router');
const morgan = require('morgan');

const app=express();
const dotenv=require('dotenv');
const cors =require('cors');


dotenv.config();
connection();
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/',router);


const PORT=process.env.PORT||4005
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))