import { Add_Awards_Info } from "../ContactInputRedux/Actiontype";

export const addAwards = (e)=>{

    const id=e.target.id;
    return{
        type:Add_Awards_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}
