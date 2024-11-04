
let mongoose= require('mongoose');

mongoose.set('strictQuery',true)
// Connection to mongoDB //

let connect= ()=>{
    mongoose.connect('mongodb://localhost:27017/Developers').then(()=>{console.log("Connection Successful")})
}

module.exports=connect