const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    description:{
        type:String,
        required:[true,"please enter a description"]
    },
    activityType:{
        type:String,
        required:[true,"please enter a activity"]
    },
    duration:{
        type:String,
        required:[true,"please enter duration"]
    },
    date:{
        type:String,
        required:[true,"please enter date"]
    },
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
    },
    contact:{
        type:String,
        required:[true,"please enter your email"],
    },
    image:{
        type:String,
        default:" "
    },
},
{
    timestamps:true
})

module.exports=mongoose.model("Todo",todoSchema)