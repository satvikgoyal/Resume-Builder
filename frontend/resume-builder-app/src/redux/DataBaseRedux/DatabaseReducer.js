const initialState={
    userData:{}
}

const DatabaseReducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_DATABASE":
            return {
                ...state,
                userData:action.data
            }
        default:return state;
    }
}

export default DatabaseReducer;