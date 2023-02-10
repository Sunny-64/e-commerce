require('dotenv').config();
const express = require("express"); 
const db = require("./config/database"); 

const app = express(); 

app.use(express.urlencoded({extended : true}));

// User Route
const userRoute = require("./routes/userRoutes"); 
app.use("/user", userRoute); 

app.listen(3000, function(){
    console.log("Server is running at port 3000"); 
})