const express=require("express");
const { registerUser, loginUser, getUser } = require("../controller/UserController");
const {protect}= require("../middleware/authTokenMiddleware");

const router=express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.get("/current",protect,getUser)


module.exports=router;