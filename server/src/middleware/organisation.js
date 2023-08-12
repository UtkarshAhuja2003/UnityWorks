const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Organisation = mongoose.model("Organisation");

module.exports = (req, res, next) => {
   const { authorization } = req.headers
  
   if (!authorization) {
      return res.status(401).json({ error: "you must be logged in" })
   }
   const token = authorization.replace("Bearer ", "");
   console.log(token);
   jwt.verify(token, process.env.ORGANISATION_SECRET_KEY, (err, payload) => {
      if (err) {
         console.log(err);
         return res.status(401).json({ error: "you must be logged in 878" })
      }
      const { _id } = payload
      Organisation.findById(_id).then(userdata => {
         req.user = userdata
         next()
      })

   })
}