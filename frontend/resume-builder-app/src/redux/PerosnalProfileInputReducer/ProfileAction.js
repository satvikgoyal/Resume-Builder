import { Add_Personal_Profile } from "../ContactInputRedux/Actiontype";

export const addProfileInfo = (e)=>{

    const id=e.target.id;
    return{
        type:Add_Personal_Profile,
        data:{
            id:id,
            value:e.target.value
        }
    }
}
