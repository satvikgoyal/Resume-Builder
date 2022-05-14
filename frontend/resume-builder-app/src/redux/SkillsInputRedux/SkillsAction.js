import { Add_Skills_Info } from "../ContactInputRedux/Actiontype"

export const addSkills = (e)=>{
    const id=e.target.id;

    return {
        type:Add_Skills_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}