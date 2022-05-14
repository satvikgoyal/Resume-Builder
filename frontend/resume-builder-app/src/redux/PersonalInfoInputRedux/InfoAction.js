import {Add_Personal_Info } from "../ContactInputRedux/Actiontype";

export const addPersonalInfo = (e) => {
    const id=e.target.id;
    return{
        type:Add_Personal_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}