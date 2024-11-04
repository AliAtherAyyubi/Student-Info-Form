const express = require('express');
const app= express();

const DB= require('./db')

////  Database connection /////

DB()
app.use(express.json())
// calling routes //
app.use('/api',require('./Routes/student'))


app.get('/',(req,res)=>{
    res.send('Developers')
})

let port=5000;
app.listen(port,()=>{
    console.log(`Site has been Started on port ${port}`);
});



