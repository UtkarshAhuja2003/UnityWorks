const mongoose=require("mongoose")


const communitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Please enter your name"],
    },
    users:[
        {
            userid:{
                type:String
            }
        }
    ],
    bio:{
        type:String,
        required:[true , "Please enter your community bio"],
    },
    adminId:{
        type:String
    },
    adminName:{
        type:String
    }
})




const Community= mongoose.model("Organisation",communitySchema);
module.exports=Community;