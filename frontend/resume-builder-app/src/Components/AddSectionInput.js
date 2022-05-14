import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import '../CSS/WorkInput.css'
import { editSection } from '../redux/AddSection/AddSectionAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';

const AddSectionInput = (props) => {
    const {sections}=useSelector(state=>state.AddSectionReducer);
    const {role,Point1,Point2,title,edate,sdate,project} = useSelector(state=> {return (props.name==="projectInput"?state.ProjectReducer:(props.name==="educationInput"?state.EducationReducer:state.WorkReducer))});

    const dispatch = useDispatch()
    const name=props.name;
    let idx=0;
    sections.map((cval,index)=>{return cval.id===name?idx=index:idx=0});
    console.log(sections[idx]);

    const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/sectionInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    sections
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
                <input type="text" id="title" className="inputs" value={sections[idx].title} onChange={e=>dispatch(editSection(e,idx))} placeholder={title}/><br/><br/>
                
                {/* <div id="deleteSegment"> */}
                    <label className="contact-labels" for="project">Organisation / University / ProjectName</label><br/>
                    <input type="text" id="project" className="inputs" value={sections[idx].project} onChange={e=>dispatch(editSection(e,idx))} placeholder={project}/><br/><br/>

                    <label className="contact-labels" for="role">Role / Responsilbilty / course</label><br/>
                    <input type="text" id="role" className="inputs" value={sections[idx].role} onChange={e=>dispatch(editSection(e,idx))} placeholder={role}/><br/><br/>

                    <label className="contact-labels" for="sdate">Start Date</label><br/>
                    <input type="email" id="sdate" className="inputs" value={sections[idx].sdate} onChange={e=>dispatch(editSection(e,idx))} placeholder={sdate}/><br/><br/>

                    <label className="contact-labels" for="edate">End Date</label><br/>
                    <input type="text" id="edate" className="inputs" value={sections[idx].edate} onChange={e=>dispatch(editSection(e,idx))} placeholder={edate}/><br/>
                    <p className="description">Leave it blank to mark it present</p>
                    

                    <label className="contact-labels" for="Point1">Point 1</label><br/>
                    <textarea cols="3" rows="3" id="Point1" className="inputs" value={sections[idx].Point1} onChange={e=>dispatch(editSection(e,idx))} placeholder={Point1}/><br/><br/>

                    <label className="contact-labels" for="Point2">Point 2</label><br/>
                    <textarea cols="3" rows="3" id="Point2" className="inputs" value={sections[idx].Point2} onChange={e=>dispatch(editSection(e,idx))} placeholder={Point2}/><br/><br/>

                    {/* <button id="deleteBlockButton" className="deleteBlock">Delete Block</button><br/> */}
                {/* </div> */}
                {/* <button className="addBlock">Add Block</button> */}

                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button className="inputformButton" onClick={saveInfo}>Save</button>

            </div> 
        </>
    )
}

export default AddSectionInput;
