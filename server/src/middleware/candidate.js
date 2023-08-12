const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Candidate = mongoose.model("Candidate");

module.exports = (req, res, next) => {
   const { authorization } = req.headers
  
   if (!authorization) {
      return res.status(401).json({ error: "you must be logged in" })
   }
   const token = authorization.replace("Bearer ", "");
   console.log(token);
   jwt.verify(token, "fjhaoiiiiiiiiiiiiinsdiiiiiiiiiiiiiiiiiiiiiiiiiiif", (err, payload) => {
      if (err) {
         console.log(err);
         return res.status(401).json({ error: "you must be logged in 878" })
      }
      const { _id } = payload
      Candidate.findById(_id).then(userdata => {
         req.user = userdata
         next()
      })

   })
}