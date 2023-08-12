const express = require("express");
const Candidate=require("../../models/users/candidate")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();
const candidateauth = require("../../middleware/candidate");

router.post("/signupCandidate", async (req, res) => {

    try {
      const {
        name,
        email,
        password,
        mobile,
        disability,
        gender,
        dob,
        bio,
        photo,
        resume
      } = req.body;
  
      Candidate.findOne({ email: email }).then((savedCandidate) => {
        if (savedCandidate) {
          return res.status(422).json({ error: "Candidate already exist" });
        }
      });
  
      const candidate = new Candidate({
        name,
        email,
        password,
        mobile,
        disability,
        gender,
        dob,
        bio,
        photo,
        resume
      });
     
    
    
      await candidate.save();
      console.log("candidate registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

  router.post("/signinCandidate",async(req,res)=>{
    const{email,password} = req.body;
if(!email || !password){
    return res.status(422).json({error:"please add all the fields"})
}
  Candidate.findOne({email:email}).then(savedUser=>{
    if(!savedUser){
       return res.status(422).json({error:"invalid email or password"})
    }
    bcrypt.compare(password,savedUser.password).then(doMatch=>{
        if(doMatch){
            console.log("successfully signin")
            const token = jwt.sign({_id:savedUser._id},process.env.CANDIDATE_SECRET_KEY);
            console.log(token)
            const {_id , name , email} = savedUser
            res.json({token , user:{_id , name,email}})
        }
        else{
            return res.status(422).json({error:"invalid email or password"})
        }
    }).catch(err=>{
        console.log(err);
    })
  })
})

router.get("/candidate/profile", candidateauth  , async (req, res) => {
  const candidate = await Candidate.findById(req.user._id);
  res.status(200).json({
    success:true,
    candidate
  })
})


module.exports=router;
