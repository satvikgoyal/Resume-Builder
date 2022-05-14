const jwt=require('jsonwebtoken');
const User = require('../models/UserSchema');
const Authenticate = async(req,res,next) =>{
    try{

        // console.log(req.cookies);
        // if(req.headers.cookie)
        {
            const token = req.headers.cookie.substring(8);
            // const token=req.Cookies.jwtoken;
            const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

            const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

            if(!rootUser){
                throw new Error("Invalid User");
            }

            req.token=token;
            req.rootUser=rootUser;
            req._id=rootUser._id;

            next();
        }

    }catch(error){
        res.status(401).send("Unauthorized:token not provided");
        console.log(error);
    }
}

module.exports=Authenticate;