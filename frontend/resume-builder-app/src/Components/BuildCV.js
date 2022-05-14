import React, { useEffect } from 'react'
import Template from './Template'
import '../CSS/BuildCV.css'
import BuildNav from './BuildNav'
import SkillsInput from './SkillsInput'
import AwardInput from './AwardInput'
import PersonalInfoInput from './PersonalInfoInput'
import PersonalProfileInput from './PersonalProfileInput'
import WorkInput from './WorkInput'
import ContactInput from './ContactInput'
import { useDispatch, useSelector } from 'react-redux'
import AddSectionInput from './AddSectionInput'
import { useHistory } from 'react-router'
import { addDataBase } from '../redux/DataBaseRedux/DatabaseAction'

export const ref=React.createRef();

const BuildCV = () => {

    const {componentClicked} = useSelector(state=>{return state.EditButtonReducer});
    const dispatch=useDispatch();

    const history=useHistory();
    // console.log(componentClicked.id);

    const callBuildCV = async ()=>{
       try{

            const res= await fetch("/buildcv",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                credentials:"include"
            })

            const data=await res.json();
            dispatch(addDataBase(data));
            console.log(data);
            sessionStorage.setItem("userData",JSON.stringify(data));
            console.log(JSON.parse(sessionStorage.getItem("userData")));
            // console.log(data.awardInfo===undefined);

            if(!(res.status===200)){
                throw new Error(res.error);
            }


       }catch(err){
           console.log(err);
           history.push("/login")
       }
    }

    useEffect(()=>{
        callBuildCV();
    });

    // const [createPdf,setCreatePdf]=useState(false);
    // const createPdfFunc=(flag)=>{
    //     setCreatePdf(flag);
    // }
    
    return (
        <>
          <div className="buildcv-page container-fluid">
              <BuildNav/>
              <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-5 p-2">
                            {/* <div className="container input-container">
                                <p>Click on the edit button of any block in the template</p>
                            </div> */}
                            {
                                (componentClicked===""||componentClicked.id==="")&&  <div className="container input-container">
                                                <p>Click on the edit button of any block in the template</p>
                                            </div>
                            }
                            {componentClicked.id==="personalInfoInput"&&<PersonalInfoInput/>}
                            {componentClicked.id==="skillsInput"&&<SkillsInput/>}
                            {componentClicked.id==="awardInput"&&<AwardInput/>}
                            {componentClicked.id==="personalProfileInput"&&<PersonalProfileInput/>}
                            {componentClicked.id==="workInput"&&<WorkInput name={componentClicked.id}/>}
                            {componentClicked.id==="contactInput"&&<ContactInput/>}
                            {componentClicked.id==="educationInput"&&<WorkInput name={componentClicked.id}/>}
                            {componentClicked.id==="projectInput"&&<WorkInput name={componentClicked.id}/>}
                            {/* {componentClicked.id!==""&&<WorkInput name={componentClicked.id}/>} */}
                            {(componentClicked.id!==""&&
                                componentClicked!==""&&
                                componentClicked.id!=="personalInfoInput"&&
                                componentClicked.id!=="skillsInput"&&
                                componentClicked.id!=="awardInput"&&
                                componentClicked.id!=="personalProfileInput"&&
                                componentClicked.id!=="workInput"&&
                                componentClicked.id!=="contactInput"&&
                                componentClicked.id!=="educationInput"&&
                                componentClicked.id!=="projectInput")&&<AddSectionInput name={componentClicked.id}/>}

                        </div>
                        <div  className="col-7 p-2">
                            <div className="container template-container" ref={ref}>
                                <Template/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>  
        </>
    )
}

export default BuildCV
