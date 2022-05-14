import { Add_Personal_Info } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"));
const initialState = (userData===null||userData.personalInfo===undefined)?{
    fullName:"James Bond",
    jobPost:"ML Engineer"
}:{
    fullName:userData.personalInfo.fullName,
    jobPost:userData.personalInfo.jobPost
}

const InfoReducer = (state=initialState,action)=>{

    switch(action.type){
        case Add_Personal_Info:   
        const {id,value}= action.data;
        return{
            ...state,
            [id]:value
        }
        default:return state
    }
}

export default InfoReducer;