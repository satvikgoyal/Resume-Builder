import { Add_Awards_Info } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"));

const initialState =(userData===null||userData.awardInfo===undefined)?{
    award1:"Most Outstanding Employee of the Year, Pixelpoint Hive (2015)",
    award2:"Best Mobile App Design, HGFZ Graduate Center (2014)",
    award3:"Design Award, Cliffmoor College (2012)"
}:{
    award1:userData.awardInfo.award1,
    award2:userData.awardInfo.award2,
    award3:userData.awardInfo.award3,
}

const AwardReducer = (state=initialState,action)=>{
    switch(action.type){
        case Add_Awards_Info:   
        const {id,value}= action.data;
        return{
            ...state,
            [id]:value
        }
        default:return state
    }
}

export default AwardReducer;