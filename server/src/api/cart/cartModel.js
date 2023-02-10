const mongoose = require("mongoose"); 

const cartSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId}, 
    productId : {type : Number}, 
    name : {type : String}, 
    // quantity : {type : Number, default : 1}, 
    // total : {type : Number},  
    createdAt : {type : Date, default : Date.now()}, 
    updatedAt : {type : Date}
})

module.exports = new mongoose.model("Cart", cartSchema);