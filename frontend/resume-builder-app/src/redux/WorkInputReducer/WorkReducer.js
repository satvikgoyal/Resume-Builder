import {Add_Work_Info } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"))
const initialState=(userData===null||userData.workInfo===undefined)?{
    title:"Work Experience",
    Point1:"Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed of that daat by 87%",
    Point2:"Build basic ETL that ingested transactional and event data from a web app with 10,000 daily active users that saved over $85,000 annually in external vendor costs",
    edate:"",
    sdate:"Apr 2019",
    role:"ML Enginering",
    project:"OzoneAI"
}:{
    title:userData.workInfo.title,
    Point1:userData.workInfo.Point1,
    Point2:userData.workInfo.Point2,
    project:userData.workInfo.project,
    edate:userData.workInfo.edate,
    sdate:userData.workInfo.sdate,
    role:userData.workInfo.role
}

const WorkReducer = (state=initialState,action)=>{

    switch(action.type){
        case Add_Work_Info:
            const {id,value}=action.data

            return{
                ...state,
                [id]:value
            }
        default:return state
    }
}

export default WorkReducer;