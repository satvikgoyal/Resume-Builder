export const addElement = (objId)=>{
    return{
        type:"Add_Element",
        objId
    }
}

export const editSection = (e,key) => {
    console.log(e.target.id+" "+e.target.value);
    const id=e.target.id;
    const value=e.target.value;
    return{
        type:"Edit_Section",
        data:{
            id:id,
            value:value,
            index:key
        }
    }
}