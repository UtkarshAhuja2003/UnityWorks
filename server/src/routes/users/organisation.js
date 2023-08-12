const express = require("express");
const Organisation=require("../../models/users/organisation")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const router = express.Router();
const organisationauth = require("../../middleware/organisation");

router.post("/signupOrganisation", async (req, res) => {

    try {
      const {
        name,
        email,
        password,
        mobile,
        location,
        about,
        image,
      } = req.body;
  
      Organisation.findOne({ email: email }).then((savedOrganisation) => {
        if (savedOrganisation) {
          return res.status(422).json({ error: "Organisation already exist" });
        }
      });
  
      const organisation = new Organisation({
        name,
        email,
        password,
        mobile,
        location,
        about,
        image,
      });
     
    
    
      await organisation.save();
      const token = jwt.sign({ _id: organisation._id },"fjhaoiiiiiiiiiiiiinsdiiiiiiiiiiiiiiiiiiiiiiiiiiif");
    const { _id, name: organisationName, email: organisationEmail  } = organisation;
    res.status(201).json({ token, user: { _id, name: organisationName, email: organisationEmail } });
    console.log(token)
      console.log("organisation registered")
    } catch (e) {
      console.log(e);
      res.status(400).send("Invalid Details");
    }
  });
  

router.post("/signinOrganisation",async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"please add all the fields"})
}
    Organisation.findOne({email:email}).then(savedOrganisation=>{
    if(!savedOrganisation){
       return res.status(422).json({error:"invalid email or password"})
    }
    bcrypt.compare(password,savedOrganisation.password).then(doMatch=>{
        if(doMatch){
            console.log("successfully signin")
            const token = jwt.sign({_id:savedOrganisation._id},"fjhaoiiiiiiiiiiiiinsdiiiiiiiiiiiiiiiiiiiiiiiiiiif");
            console.log(token)
            const {_id , name , email} = savedOrganisation
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

router.get("/organisation/dashboard", organisationauth  , async (req, res) => {
    const organisation = await Organisation.findById(req.user._id);
    res.status(200).json({
      success:true,
      organisation
    })
  })
  


module.exports=router;
