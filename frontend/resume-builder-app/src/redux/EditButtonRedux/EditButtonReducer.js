import {Discard,Edit_button_Click } from "../ContactInputRedux/Actiontype";

const initialState = {
    componentClicked : ""
}

const EditButtonReducer = (state =  initialState,action) => {
    switch(action.type){
        case Edit_button_Click :
            return {
                    ...state,
                    componentClicked:action.data
                   }
        case Discard:
            return{
                ...state,
                componentClicked:""
            }
        default: return state
    }
}

export default EditButtonReducer;