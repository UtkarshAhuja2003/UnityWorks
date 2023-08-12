const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")


const organisationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Please enter your name"],
    },
    email:{
        type:String,
        required:[true , "Please enter your email"],
        unique:true,
        validate:validator.isEmail,
    },
    password:{
        type:String,
        required:[true , "Please enter your password"], 
        minLength:[8,"password must be atleast 8 characters"],
    },
    mobile:{
        type:String,
        required:[true , "Please enter your Mobile Number"], 
    },
    location:{
        type:String,
        required:[true , "Please enter your location"], 
    },
    aboutUs:{
        type:String,
        required:[true , "Please enter your details"], 
    },
    photo:{
        type:String,
        required:[true , "Please enter your photo"], 
    },
    companySize:{
        type:String,
        required:[true , "Please enter your comapany size"], 
    },
    industry:{
        type:String,
        required:[true , "Please enter your industry type"], 
    },
    jobs:[
        {
            id:{
                type:String,
            }
        }
    ],
    tokens:[{
        token:{
            type:String,
        }
    }],
    
})


organisationSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Organisation= mongoose.model("Organisation",organisationSchema);
module.exports=Organisation;