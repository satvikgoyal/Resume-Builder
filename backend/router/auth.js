const express= require('express');
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const Authenticate = require("../middleware/Authenticate");

require('../db/conn');

const User = require('../models/UserSchema')

router.get("/",(req,res)=>{
    res.send("welcome to router home page");
})

// router.post("/register",(req,res)=>{
//     const {username,email,password,cpassword} = req.body;

//     if(!username || !email || !password || !cpassword){
//         return res.status(422).json({message:"please fill the field properly"});
//     }

//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({message:"email already exsist"});
//         }

//         const user =  new User({username,email,password,cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered sucessfully"});
//         }).catch((err)=>{
//             res.status(500).json({error:"failed to register"})
//         })
//     }).catch((err)=>{
//         console.log(err);
//     })

// })


router.post("/register",async (req,res)=>{

    try{

        const {username,email,password,cpassword} = req.body;

        if(!username || !email || !password || !cpassword){
            return res.status(422).json({message:"please fill the field properly"});
        }

        const userExist=await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({message:"email already exsist"});
        }else if(password!=cpassword){
            return res.status(422).json({message:"passwords are not matching"});
        }else{
            const user =  new User({username,email,password,cpassword});
            
            //before saving data we are doing hashing of password (acting as a middleware)

            const registered = await user.save()

            if(registered){
                res.status(201).json({message:"user registered sucessfully"});
            }else{
                res.status(500).json({error:"failed to register"})
            }   
        }
    }catch(err){
        console.log(err);
    }
})

router.post("/login",async(req,res)=>{
    try {
        
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(422).json({message:"Fill the field properly"});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
    
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token=await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
                    
            if(isMatch){
                 res.status(200).json({message:"user login successful"});
            }else{
                 res.status(400).json({error:"Invalid credentials"});
            }
        }else{
            return res.status(400).json({error:"user sign unsuccessful"});
        }

       

    } catch (error) {
        console.log(error);
    }
})

router.get("/buildcv", Authenticate ,(req,res)=>{
    res.send(req.rootUser);
})

router.post("/personalInfo",Authenticate,async (req,res)=>{
    try{

        const {fullName,jobPost} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addPersonalInfo(fullName,jobPost);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/contactInfo",Authenticate,async (req,res)=>{
    try{

        const {address1,address2,email,phone,gitlink} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addContactInfo(address1,address2,email,phone,gitlink);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/skillInfo",Authenticate,async (req,res)=>{
    try{

        const {Skill1,Skill2,Skill3,Skill4,Skill5} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addSkillInfo(Skill1,Skill2,Skill3,Skill4,Skill5);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/awardInfo",Authenticate,async (req,res)=>{
    try{

        const {award1,award2,award3} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addAwardInfo(award1,award2,award3);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/aboutme",Authenticate,async (req,res)=>{
    try{

        const {profileInfo} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addAboutMe(profileInfo);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/anotherinfo",Authenticate,async (req,res)=>{
    try{

        const {id,role,Point1,Point2,title,edate,sdate,project} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addAnotherInfo(id,role,Point1,Point2,title,edate,sdate,project);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.post("/sectionInfo",Authenticate,async (req,res)=>{
    try{

        const {sections} = req.body;

        const user=await User.findOne({_id:req._id});

        if(user){
            const userInfo =await user.addSectionInfo(sections);
            console.log(userInfo);

            await user.save();

            return res.status(201).json(req.rootUser);
        }

    }catch(error){
        console.log(error);
        res.status(422).json({error:"personal Info not saved"});
    }
})

router.get("/logout",(req,res)=>{
    res.clearCookie("jwtoken",{path:"/"});
    res.status(200).send("user logout");
})
module.exports=router;