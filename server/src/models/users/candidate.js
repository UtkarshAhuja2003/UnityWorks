const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")


const candidateSchema = new mongoose.Schema({
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
    resume:{
        type:String,
        // required:[true , "Please provide your resume"],
    },
    disability:{
        type:String,
        required:[true, "Please enter your disability"]
    },
    gender:{
        type:String,
        required:[true, "Please enter your gender"]
    },
    dob:{
        type:String,
        required:[true, "Please enter your Date of Birth"]
    },
    bio:{
        type:String,
        required:[true, "Please enter about yourself"]
    },
    image:{
        type:String,
        // required:[true, "Please enter your photo"]
    },
    groups:[
        {
            id:{
                type:String,
            },
            groupName:{
                type:String,
            }
        }
    ],
    applications:[
        {
            id:{
                type:String,
            },
        }
    ],

    tokens:[{
        token:{
            type:String,
        }
    }],
    
})


candidateSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,5)
    }
})


const Candidate= mongoose.model("Candidate",candidateSchema);
module.exports=Candidate;