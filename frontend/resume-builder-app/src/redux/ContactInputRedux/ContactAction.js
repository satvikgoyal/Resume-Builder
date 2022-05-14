import { Add_Contact_Info } from "./Actiontype" 

export const addContactInfo = (e)=>{

    // console.log(e);
    const id = e.target.id;

    return {
        type:Add_Contact_Info,
        data:{
            id:id,
            value:e.target.value
        }
    }
}