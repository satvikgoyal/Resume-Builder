import { Add_Contact_Info } from "./Actiontype"

const userData = JSON.parse(sessionStorage.getItem("userData"));
const initialState = (userData===null||userData.contactInfo===undefined)?{
    address1:"3205 Eden Drive, Glen Allen",
    address2:"e.g virgina - 23060",
    email:"oliviawil@email.net",
    phone:"804-931-9418",
    gitlink:"github.com/oliwil"
}:{
    address1:userData.contactInfo.address1,
    address2:userData.contactInfo.address2,
    email:userData.contactInfo.email,
    phone:userData.contactInfo.phone,
    gitlink:userData.contactInfo.gitlink
}

const ContactReducer = (state=initialState,action)=>{
    switch(action.type){
        case Add_Contact_Info :
            const {id,value} = action.data;
            return{
                ...state,
                [id]:value               
            }
        default: return state
    }
}

export default ContactReducer;