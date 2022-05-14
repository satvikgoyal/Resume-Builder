import { Add_Project_Info } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"));

const initialState=(userData===null||userData.projectInfo===undefined)?{
    title:"Project",
    Point1:"ULed the data ingestion efforts for our three person team which developed a real time tracker of campus events for universities in Pennsylvania",  
    Point2:"Built web scraper in Python that got data from websites of campus groups then built an ETL which loaded data into Amazon Redshift",
    project:"Campus Event",
    edate:"",
    sdate:"",
    role:""
}:{
    title:userData.projectInfo.title,
    Point1:userData.projectInfo.Point1,
    Point2:userData.projectInfo.Point2,
    project:userData.projectInfo.project,
    edate:userData.projectInfo.edate,
    sdate:userData.projectInfo.sdate,
    role:userData.projectInfo.role
}

const ProjectReducer = (state=initialState,action)=>{

    switch(action.type){
        case Add_Project_Info:
        const {id,value}=action.data

            return{
                ...state,
                [id]:value
            }
        default:return state
    }
}

export default ProjectReducer;