const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema({
    name : {type : String}, 
    price : {type : Number}, 

    status : {type : Boolean, default : true}, 
    createdAt : {type : Date, default : Date.now()}
})