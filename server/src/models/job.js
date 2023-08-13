const mongoose=require("mongoose")
const validator = require("validator")


const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , "Please enter the job title"],
    },
    desc:{
        type:String,
        required:[true , "Please enter the job description"],
    },
    responsibility:{
        type:String,
        required:[true , "Please enter the job responsibility"],
    },
    skills:{
        type:String,
        required:[true , "Please enter the skills"],
        
    },
    disabilities:{
        type:String,
        required: [true , "Please enter the job disability"],

    },
    jobType:{
        type:String,
        required:[true,"Please enter a Job Type"]
    },
    postedby:{
        type:String
    },
    applicant:{
        type:String
    }
})




const Job= mongoose.model("Job",jobSchema);
module.exports=Job;