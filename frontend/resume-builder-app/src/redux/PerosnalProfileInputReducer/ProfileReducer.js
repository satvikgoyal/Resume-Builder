import { Add_Personal_Profile } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"));

const initialState = (userData===null||userData.aboutMe===undefined)?{
    profileInfo:"A Python developer with 5.8 years of experience in Django, Flask for Retail eCommerce, POS and Storage"
}:{
    profileInfo:userData.aboutMe
}
const ProfileReducer = (state=initialState,action)=>{
    switch(action.type){
        case Add_Personal_Profile:   
        const {id,value}= action.data;
        return{
            ...state,
            [id]:value
        }
        default:return state
    }
}

export default ProfileReducer;