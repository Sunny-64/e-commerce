const router = require("express").Router(); 
const userController = require("./../api/user/userController"); 


router.post("/register", userController.register);
router.post("/login", userController.login);

router.use(require("./../middlewares/auth"));

router.get("/order", (req, res)=>{
    res.send("hello")
})

router.get("*", (req, res)=> {
    res.json({
        status : 404, 
        success : false, 
        message : "404 Page not found"
    })
})
router.post("*", (req, res)=> {
    res.json({
        status : 404, 
        success : false, 
        message : "404 Page not found"
    })
})

module.exports = router; 