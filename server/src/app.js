require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({
    origin:["http://localhost:3000","https://unityworks.netlify.app"]
}));

require("./db/conn");
const port = process.env.PORT || 5000;


require("./models/users/candidate");
require("./models/users/organisation");
// require("./models/community");
require("./models/job");

const jobsRouter = require("./routes/job");
const candidate = require("./routes/users/candidate");
const organization = require("./routes/users/organisation");

app.use("/api/v1", candidate);
app.use("/api/v1", organization);
app.use("/api/v1", jobsRouter);

// app.use(require("./routes/community"));
// app.use(require("./routes/job"));

app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});