const mongoose=require('mongoose');
const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(()=>{
    console.log("database conected successfully");
}).catch(()=>{
    console.log("database not connected");
});