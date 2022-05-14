import { Add_Education_Info } from "../ContactInputRedux/Actiontype";

const userData = JSON.parse(sessionStorage.getItem("userData"));
const initialState=(userData===null||userData.educationInfo===undefined)?{
    title:"EDUCATION",
    Point1:"Cumulative GPA: 3.7",  
    Point2:"Concentration: Software Engineering",
    Point3:"Relevant courses: Data Structures, Algorithm Design, Database Management Systems, Computer Vision, Software Design Methodology",    
    sdate:"Sep 2015",
    edate:"Apr 2019",
    project:"University Of Pittsburgh",
    role:"B.S in Computer Science"
}:{
    title:userData.educationInfo.title,
    Point1:userData.educationInfo.Point1,
    Point2:userData.educationInfo.Point2,
    Point3:userData.educationInfo.Point3,
    sdate:userData.educationInfo.sdate,
    edate:userData.educationInfo.edate,
    project:userData.educationInfo.project,
    role:userData.educationInfo.role
}

const EducationReducer = (state=initialState,action)=>{

    switch(action.type){
        case Add_Education_Info:
        const {id,value}=action.data

            return{
                ...state,
                [id]:value
            }
        default:return state
    }
}

export default EducationReducer;