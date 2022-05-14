const initialState="false";

const LogoutReducer = (state=initialState,action)=>{
    switch(action.type){
        case "Logout_User":
            // console.log(action.data);
            return {
                state:action.data
            }
        default:
            return state;
    }
}

export default LogoutReducer;