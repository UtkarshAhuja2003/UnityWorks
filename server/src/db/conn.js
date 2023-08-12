const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://unityworks:${process.env.MONGO_DB}@unityworks.01e5pcg.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})