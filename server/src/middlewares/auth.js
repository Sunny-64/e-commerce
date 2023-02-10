const jwt = require("jsonwebtoken"); 

module.exports = (req, res, next) =>{
    const token = req.headers['authorization']; 
    if(token === undefined || token === null){
        res.json({status : 401, success : false, message : "Unauthorized Access"}); 
    }
    else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded){
            if(err){
                res.json({status : 401, success : false, message : "Unauthorized Access"}); 
            }
            else{
                req.user = decoded; 
                next();
            }
        }); 
    }
}