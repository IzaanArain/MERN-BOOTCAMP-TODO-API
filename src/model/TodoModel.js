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
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("Todo",todoSchema)