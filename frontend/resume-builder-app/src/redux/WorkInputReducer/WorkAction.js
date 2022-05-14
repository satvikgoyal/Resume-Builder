import { Add_Work_Info } from "../ContactInputRedux/Actiontype"
import { Add_Education_Info } from "../ContactInputRedux/Actiontype"
import { Add_Project_Info } from "../ContactInputRedux/Actiontype"


export const addWork = (e)=>{
    // console.log(e);
    const id=e.target.id;

    return {
        type:Add_Work_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}

export const addEducation = (e)=>{
    const id=e.target.id;
    // console.log(e);


    return {

        type:Add_Education_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}

export const addProject = (e)=>{
    // console.log(e);

    const id=e.target.id;

    return {
        type:Add_Project_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}