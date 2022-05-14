import React from 'react'
import '../CSS/WorkInput.css'
import { useSelector,useDispatch } from 'react-redux'
import { addWork,addEducation,addProject} from '../redux/WorkInputReducer/WorkAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';
// import { editSection } from '../redux/AddSection/AddSectionAction';
// import { createElement } from 'react';

const WorkInput = (props) => {
    // let {role,Point1,Point2,title,edate,sdate,project} ;
    const {role,Point1,Point2,title,edate,sdate,project} = useSelector(state=> {return (props.name==="projectInput"?state.ProjectReducer:(props.name==="educationInput"?state.EducationReducer:state.WorkReducer))});


    const dispatch = useDispatch()
    const name=props.name;

    let trigger;
    if(name==="projectInput"){
        trigger=addProject;
    }else if(name==="educationInput"){
        // console.log("addeduvation function is triggering")
        trigger=addEducation;

    }else{
        trigger=addWork;
    }

    
    const saveInfo = async(e)=>{
        try{

            e.preventDefault();
            const id=e.target.id;

            const res= await fetch("/anotherInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id,role,Point1,Point2,title,edate,sdate,project
                })
            })

            const data=await res.json();

            // console.log(data);

            if(data){
                console.log("info saved successfully");
                window.alert("info saved successfully");
            }else{
                window.alert("info not saved");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="container contact-input p-4">
                <label className="title contact-labels" for="title">Title</label><br/>
                <input type="text" id="title" className="inputs" value={title} onChange={e=>dispatch(trigger(e))} placeholder={title}/><br/><br/>
                
                {/* <div id="deleteSegment"> */}
                    <label className="contact-labels" for="project">Organisation / University / ProjectName</label><br/>
                    <input type="text" id="project" className="inputs" value={project} onChange={e=>dispatch(trigger(e))} placeholder={project}/><br/><br/>

                    <label className="contact-labels" for="role">Role / Responsilbilty / course</label><br/>
                    <input type="text" id="role" className="inputs" value={role} onChange={e=>dispatch(trigger(e))} placeholder={role}/><br/><br/>

                    <label className="contact-labels" for="sdate">Start Date</label><br/>
                    <input type="email" id="sdate" className="inputs" value={sdate} onChange={e=>dispatch(trigger(e))} placeholder={sdate}/><br/><br/>

                    <label className="contact-labels" for="edate">End Date</label><br/>
                    <input type="text" id="edate" className="inputs" value={edate} onChange={e=>dispatch(trigger(e))} placeholder={edate}/><br/>
                    <p className="description">Leave it blank to mark it present</p>
                    

                    <label className="contact-labels" for="Point1">Point 1</label><br/>
                    <textarea cols="3" rows="3" id="Point1" className="inputs" value={Point1} onChange={e=>dispatch(trigger(e))} placeholder={Point1}/><br/><br/>

                    <label className="contact-labels" for="Point2">Point 2</label><br/>
                    <textarea cols="3" rows="3" id="Point2" className="inputs" value={Point2} onChange={e=>dispatch(trigger(e))} placeholder={Point2}/><br/><br/>

                    {/* <button id="deleteBlockButton" className="deleteBlock" onClick={e=>deleteBlock(e.target.id)}>Delete Block</button><br/> */}
                {/* </div> */}
                {/* <button className="addBlock" onClick={addBlock}>Add Block</button> */}

                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button id={props.name} className="inputformButton" onClick={saveInfo}>Save</button>
            </div> 
        </>
    )
}

export default WorkInput
