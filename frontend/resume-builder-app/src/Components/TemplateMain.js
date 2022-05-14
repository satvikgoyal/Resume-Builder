import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { editButtonClick } from '../redux/EditButtonRedux/EditButtonAction';
import {useDispatch} from 'react-redux'
import { addElement } from '../redux/AddSection/AddSectionAction';

// import Temporary from './Temporary.js'

const TemplateMain = () => {

    const {profileInfo} = useSelector(state => state.ProfileReducer);
    const {fullName,jobPost} = useSelector(state => state.InfoReducer);
    const {role,Point1,Point2,title,edate,sdate,project} = useSelector(state=>{return state.WorkReducer});
    const education =  useSelector(state=>{return state.EducationReducer});
    const projects = useSelector(state=>{return state.ProjectReducer});
   
    const {sections} = useSelector(state => state.AddSectionReducer)
    const [count,setCount]=useState(0);

    const[secArray,setSecArray]=useState(sections);
    // console.log(secArray);
    // console.log(sections);

    useEffect(() => {
        setSecArray(sections);
    }, [sections]);

    const dispatch=useDispatch();

    const deleteSection = (id)=>{
        setSecArray((oldSection)=>{
            return oldSection.filter((cval,index)=>{
                return cval.id!==id;
            })
        })
        // console.log("Section is deleted");
    }

    const deleteColumn = ()=>{
        console.log("Element is deleted");
    }

    return (
            <>
                <div className="container main-content">
                <div className=" container personal-info">
                    <button className="edit-button" ><i id="personalInfoInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                    <h1 className="person-name">{fullName}</h1>
                    <hr/>
                    <h3 className="person-post">{jobPost}</h3>
                </div>
                <div className=" container main-info">
                    <button className="edit-button"><i id="personalProfileInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                    <h3 className="main-heading">Personal-profile</h3>
                    <p className="personal-content">
                        {profileInfo}
                    </p>
                </div>
                <div className=" container main-info" id="work-experience">
                    <button className="edit-button" ><i id="workInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                    <button className="delete-button" ><i id="workDelete" className="fas fa-trash" onClick={e=>deleteColumn(e.target.id)}></i></button>
                    <h3 className="main-heading">{title}</h3>
                    <h6 className="work-company">{project}</h6>
                    <p className=" work-details">{role} | {sdate} - {edate||"Present"}</p>
                    <ul type-of-list="unordered" className="work-points">
                        <li>{Point1}</li>
                        <li>{Point2}</li>
                    </ul>
                </div>
                <div className=" container main-info">
                    <button className="edit-button" ><i id="projectInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                    <button className="delete-button" ><i id="projectDelete" className="fas fa-trash" onClick={e=>deleteColumn(e.target.id)}></i></button>
                    <h3 className="main-heading">{projects.title}</h3>
                    <h6 className="work-company">{projects.project}</h6>
                    <ul type-of-list="unordered" className="work-points">
                        <li>{projects.Point1}</li>
                        <li>{projects.Point2}</li>
                    </ul>
                </div>
                <div className=" container main-info">
                    <button className="edit-button" ><i id="educationInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                    <button className="delete-button" ><i id="educationDelete" className="fas fa-trash" onClick={e=>deleteColumn(e.target.id)}></i></button>
                    <h3 className="main-heading">{education.title}</h3>
                    <h6 className="work-company">{education.project}</h6>
                    <p className=" work-details">{education.role} | {education.sdate} - {education.edate}</p>
                    <ul type-of-list="unordered" className="work-points">
                        <li>{education.Point1}</li>
                        <li>{education.Point2}</li>
                    </ul>
                </div>

                {/* <Temporary/> */}

                {
                    secArray.map((cval,index)=>{
                        return(
                                <div className=" container main-info" id={cval.id} key={index}>
                                    <button className="edit-button" ><i id={cval.id} onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button>
                                    <button className="delete-button" ><i id={cval.id} onClick={e=>deleteSection(e.target.id)} className="fas fa-trash"></i></button>
                                    <h3 id="title" className="main-heading">{cval.title}</h3>
                                    <h6 id="project" className="work-company">{cval.project}</h6>
                                    <p className=" work-details"><span id="role">{cval.role}</span> | <span id="sdate">{cval.sdate}</span> - <span id="edate">{cval.edate||"Present"}</span></p>
                                    <ul type-of-list="unordered" className="work-points">
                                        <li id="point1">{cval.Point1}</li>
                                        <li id="point2">{cval.Point2}</li>
                                    </ul>
                                </div> 
                        )
                    })
                }
                <button className="add-section" onClick={()=>{dispatch(addElement(`element${count}`),setCount(count+1))}}>+add section</button>
            </div>
        </>
    )
}

export default TemplateMain
