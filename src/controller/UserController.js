const asyncHandler = require("express-async-handler");
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')
const User=require("../model/UserModel")

//@desc Register a new User
//@route POST /api/users
//@access Private
const registerUser = asyncHandler(async (req, res) => {
    const {fname,
        lname,
        email,
        password,
        contact,country,city,age,image}=req.body
    if(!fname || !lname|| !email|| !password){
        res.status(400)
        throw new Error("please enter all fields")
    }
    //check if a user exits already 
    const userExits=await User.findOne({email})
    if(userExits){
        res.status(400)
        throw new Error("User already exits")
    }

    //hash password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    console.log("Hashed password: ",hashedPassword)
    
    //create a user
    const user=await User.create({
        fname:fname,
        lname:lname,
        password:hashedPassword,
        email:email,
        contact:contact,
        country:country,
        city:city,
        age:age,
        image:image
    })
    if(user){
        res.status(201).json(user)
        // res.status(201).json({
        //     _id:user.id,
        //     fname:user.fname,
        //     email:user.email
        // })
    }else{
        res.status(400)
        throw new Error("user data is not valid")
    }
    // console.log(`User created ${user}`);
    // res.status(200).json({ message: `please register user` });
  });

//@desc Authenticate a new User
//@route POST /api/users
//@access Private
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `please login user` });
  });

//@desc GET user data
//@route GET /api/users
//@access Private
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `user data display` });
  });

  module.exports={registerUser,loginUser,getUser}