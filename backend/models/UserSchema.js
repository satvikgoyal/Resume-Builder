const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    tokens:[{
        token:{

        }
    }],
    personalInfo:{
        fullName:{
            type:String
        },
        jobPost:{
            type:String
        }
    },
    contactInfo:{
        address1:{
            type:String
        },
        address2:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:String
        },
        gitlink:{
            type:String
        }
    },
    skillInfo:{
        Skill1:{
            type:String
        },
        Skill2:{
            type:String
        },
        Skill3:{
            type:String
        },
        Skill4:{
            type:String
        },
        Skill5:{
            type:String
        }
    },
    awardInfo:{
        award1:{
            type:String
        },
        award2:{
            type:String
        },
        award3:{
            type:String
        }
    },
    aboutMe:{
        type:String
    },
    workInfo:{
        role:{
            type:String
        },edate:{
            type:String
        },sdate:{
            type:String
        },title:{
            type:String
        },project:{
            type:String
        },Point1:{
            type:String
        },Point2:{
            type:String
        }
    },
    educationInfo:{
        role:{
            type:String
        },edate:{
            type:String
        },sdate:{
            type:String
        },title:{
            type:String
        },project:{
            type:String
        },Point1:{
            type:String
        },Point2:{
            type:String
        }
    },
    projectInfo:{
        role:{
            type:String
        },edate:{
            type:String
        },sdate:{
            type:String
        },title:{
            type:String
        },project:{
            type:String
        },Point1:{
            type:String
        },Point2:{
            type:String
        }
    },
    sectionsInfo:[

    ]
})

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

userSchema.methods.addPersonalInfo = async function(fullName,jobPost){
    try{

        this.personalInfo = {fullName,jobPost};
        await this.save();
        return this.personalInfo;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addContactInfo = async function(address1,address2,email,phone,gitlink){
    try{

        this.contactInfo = {address1,address2,email,phone,gitlink};
        await this.save();
        return this.contactInfo;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addAwardInfo = async function(award1,award2,award3){
    try{

        this.awardInfo = {award1,award2,award3};
        await this.save();
        return this.awardInfo;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addSkillInfo = async function(Skill1,Skill2,Skill3,Skill4,Skill5){
    try{

        this.skillInfo = {Skill1,Skill2,Skill3,Skill4,Skill5};
        await this.save();
        return this.skillInfo;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addAboutMe = async function(profileInfo){
    try{

        this.aboutMe = profileInfo;
        await this.save();
        return this.aboutMe;

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addAnotherInfo = async function(id,role,Point1,Point2,title,edate,sdate,project){
    try{

        if(id==="workInput"){
            this.workInfo={role,Point1,Point2,title,edate,sdate,project};
            await this.save();
            return this.workInfo;
        }else if(id==="educationInput"){
            this.educationInfo={role,Point1,Point2,title,edate,sdate,project};
            await this.save();
            return this.eduactionInfo;
        }else{
            this.projectInfo={role,Point1,Point2,title,edate,sdate,project};
            await this.save();
            return this.projectInfo;
        }

    }catch(error){
        console.log(error);
    }
}

userSchema.methods.addSectionInfo = async function(sections){
    try{

        this.sectionsInfo = sections;
        await this.save();
        return this.sectionsInfo;

    }catch(error){
        console.log(error);
    }
}


userSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
});

const UserData = mongoose.model('USERDATA',userSchema);

module.exports=UserData;