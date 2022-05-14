const userData=JSON.parse(sessionStorage.getItem("userData"));

const initialState=(userData===null||userData.sectionsInfo===undefined || userData.sectionsInfo.length===0)?{
    sections:[]
}:{
    sections:userData.sectionsInfo
}

const AddSectionReducer = (state=initialState,action)=>{

    switch(action.type){
        case "Add_Element":

            // const id=e.target.id;
            const objId=action.objId;
            console.log(objId);

            return{
                ...state,
                sections:[
                    ...state.sections,
                    {  
                        id:objId,
                        title:"Added Section",
                        Point1:"Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed of that daat by 87%",
                        Point2:"Build basic ETL that ingested transactional and event data from a web app with 10,000 daily active users that saved over $85,000 annually in external vendor costs",
                        edate:"",
                        sdate:"Apr 2019",
                        role:"ML Enginering",
                        project:"OzoneAI"
                    }
                ]
            }

        case "Edit_Section":
            const{id,value,index}=action.data;
            // console.log(action.data);
            // const changeSection=state.sections[0]
            // console.log(changeSection)
            state.sections[index]={...state.sections[index],[id]:value}
            console.log("new section[0] is",state.sections[0]);

            return{
                ...state,
                // sections:[
                //     ...state.sections,
                //     state.sections[index]={...state.sections[index],[id]:value}
                // ]
            }

        default: return state
    }
}

export default AddSectionReducer;