const express = require('express')
const mongoose = require ('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        unique:true,
        required:true
    },
    email : {
        type : String,
        unique:true,
        required:true
    },
    age : Number,
    password : {
        type : String,
        required:true
    }
})
const person = mongoose.model('user', personSchema)
module.exports = person