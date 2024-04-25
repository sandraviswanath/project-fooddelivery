const mongoose= require('mongoose');
const connection=async()=>{
try{
    // const connect=await mongoose.connect('mongodb+srv://sandraviswanath2:9496050858@sandra.ygdxxq9.mongodb.net/?retryWrites=true&w=majority')

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log('database is connected')

}
catch(err){
console.log(`error:${err}`);
process.exit()
}
}


module.exports=connection;