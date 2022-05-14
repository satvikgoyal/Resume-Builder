import { Add_Skills_Info } from "../ContactInputRedux/Actiontype";
const userData = JSON.parse(sessionStorage.getItem("userData"));
const initialState=(userData===null||userData.skillInfo===undefined)?{
    Skill1:"Django",
    Skill2:"Python",
    Skill3:"Java",
    Skill4:"Ruby",
    Skill5:"React"
}:{
    Skill1:userData.skillInfo.Skill1,
    Skill2:userData.skillInfo.Skill2,
    Skill3:userData.skillInfo.Skill3,
    Skill4:userData.skillInfo.Skill4,
    Skill5:userData.skillInfo.Skill5
}

const SkillsReducer = (state=initialState,action)=>{
    switch(action.type){
        case Add_Skills_Info:
            const {id,value}=action.data
            return{
                ...state,
                [id]:value
            }
        default:return state
    }
}

export default SkillsReducer;