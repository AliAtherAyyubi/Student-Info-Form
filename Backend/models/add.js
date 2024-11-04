

let mongoose=require('mongoose')
// const express= require('express')
// const router= express.Router();


let StudentSchema= mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
    },
    rollno:Number,
    major:String,
    year:String,
    section:String,
    semester:Number,
    dob:String,
    gender: String,
    age: Number,
    email: String,
    mobile: Number,
    country:String,
    religion: {
        type:String,
        default:'Null'
    },
    date:{type:Date,default:Date.now}
})

let model= mongoose.model('Student',StudentSchema);

module.exports=model