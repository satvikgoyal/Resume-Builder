import { Discard, Edit_button_Click } from "../ContactInputRedux/Actiontype";

export const editButtonClick = (e) => {
    const id=e.target.id;
    return{
        type:Edit_button_Click,
        data:{
            id:id
        }
    }
}

export const discard = () =>{
    return{
        type:Discard
    }
}