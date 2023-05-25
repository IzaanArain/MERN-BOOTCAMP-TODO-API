const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    fname:{
        type:String,
        required:[true,"please enter your first name"]
    },
    lname:{
        type:String,
        required:[true,"please enter your last name"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"please enter your password"]
    },
    image:{
        type:String,
        default:" "
    },
    age:{
        type:Number,
    },
    contact:{
        type:String,
        default:" "
    },
    country:{
        type:String,
        default:" "
    },
    city:{
        type:String,
        default:" "
    },
},
{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema);