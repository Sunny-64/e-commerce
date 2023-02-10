const bcrypt = require("bcrypt"); 
const User = require("./userModel"); 
const jwt = require("jsonwebtoken"); 
const Cart = require("./../cart/cartModel"); 

exports.register = async (req, res) => {
    const {name, email, password} = req.body; 

    // if no fields are received from the client
    if(req.body === undefined || req.body === null){
        res.json({status : 400, message : "Invalid Data"})
    }
    else{
       try{
        // check if user is already registered 
        const userExists = await User.findOne({email : email}); 

        // if user already exists return user already exists
        if(userExists !== null){
            res.json({status : 400, message : "User already Registered"}); 
        }
        else{
            // if user does not exist create new user
            const userObj = new User(); 
            userObj.name = name; 
            userObj.email = email; 
            userObj.password = bcrypt.hashSync(password, 10); 
            const saveUser = await userObj.save(); 

            res.json({status : 200, message : "user Registered Successfully"}); 
        }
       }catch(err){
        res.json({status : 500, message : "There was an err " + err, err})
       }
    }
}

exports.login = async (req, res) => {
    const {email , password} = req.body; 
    if(req.body === undefined || email === undefined || password === undefined){
        res.json({status : 400, message : "Missing Data"});
    }
    else{
        try{
            const findUser = await User.findOne({email : email}); 
            if(findUser !== null){
                if(bcrypt.compareSync(password, findUser.password)){
                    let payload = {
                        id : findUser._id,
                        name : findUser.name, 
                        email : findUser.email
                    }
                    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)
                    res.json({status : 200, message : "Correct password", token : token});
                }
                else{
                    res.json({status : 401, message : "Wrong password"}); 
                }
            }
            else{
                res.json({status : 404, message : "User not Found"}); 
            }
        }catch(err){
            res.json({status : 500, success : false, error : `${err}`})
        }
    }
}

exports.saveCart = async (req, res) => {
    const {productId, quantity, total, name} = req.body
    const userId = req.user.id
    try{
        const cartObj = new Cart(); 
        cartObj.productId = productId; 
        cartObj.userId = userId; 
        cartObj.quantity = quantity; 
        cartObj.total = total; 
        cartObj.name = name; 
        const saveCart = await cartObj.save(); 
        res.json({status : 200, success : true, message : "Cart saved successfully", data : saveCart});
    } catch(err){
        res.json({status : 500, success : false, message : err.message}); 
    }
}