const express = require ('express');
const app = express()
const mongoose= require ('mongoose')
const User = require ('./Models/user')
app.use(express.json())
require('dotenv').config({path:'./config/.env'})


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
app.listen(process.env.Port,(err)=>err? console.log(err) : console.log(`this server running as ${process.env.Port}`) )

app.post('/register',(req,res)=>{
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
app.get('/allusers',(req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
app.put('/:userId',(req,res)=>{
    User.findByIdAndUpdate(req.params.userId,req.body,{new:true})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
app.delete('/:userId',(req,res)=>{
    User.findByIdAndDelete(req.params.userId)
    .then(data=>res.json(`${data.name}'s account has been deleted`))
    .catch(err=>res.status(500).json(err))
})