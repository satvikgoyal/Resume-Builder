const express = require('express');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config({path:'./config.env'});

const app=express();


require('./db/conn.js')
app.use(express.json());
app.use(cors());

// app.use((req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Header","*");
//     // next();
// })


app.use(require('./router/auth'))



const PORT=process.env.PORT;



app.get('/',(req,res)=>{
    res.send("Welcome to backend");
})

app.get('/login',(req,res)=>{
    res.send("welcome to login page");
})

// app.get("/buildcv",(req,res)=>{
//     res.send("welcome to buildcv page");
// })

app.get("/register",(req,res)=>{
    res.send("welcome to register page");
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})