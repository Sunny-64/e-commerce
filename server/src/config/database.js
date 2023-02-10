const mongoose = require("mongoose"); 
mongoose.set("strictQuery", false); 
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")
.then(data => {
    console.log("Database connected successfully"); 
})
.catch(err => {
    console.log(err); 
})
