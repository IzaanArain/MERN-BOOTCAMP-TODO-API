const express=require("express");
const { registerUser, loginUser, getUser } = require("../controller/UserController");

const router=express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/current").get(getUser)


module.exports=router;