import React from 'react'
import '../CSS/PersonalInfoInput.css'
import { useSelector,useDispatch } from 'react-redux';
import { addPersonalInfo } from '../redux/PersonalInfoInputRedux/InfoAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';

const PersonalInfoInput = () => {
    const {fullName,jobPost} = useSelector(state=>{return state.InfoReducer});
    const dispatch = useDispatch()

    const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/personalInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fullName,jobPost
                })
            })

            const data=await res.json();
            // const tempData= JSON.parse(sessionStorage.getItem('userData'));
            // tempData.personalInfo=data.personalInfo;
            // console.log("temp data");
            // console.log(tempData)
            // sessionStorage.setItem("userData",JSON.stringify(tempData));
            console.log(data);

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
                <form method="POST">
                    <label className="contact-labels" for="fullName">Full Name</label><br/>
                    <input type="text" id="fullName" className="inputs" value={fullName} onChange = {e=>dispatch(addPersonalInfo(e))} placeholder={fullName}/><br/><br/>

                    <label className="contact-labels" for="jobPost">Job Role</label><br/>
                    <input type="text" id="jobPost" className="inputs" value={jobPost} onChange = {e=>dispatch(addPersonalInfo(e))} placeholder={jobPost}/><br/><br/>

                    <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                    <button className="inputformButton" onClick={saveInfo}>Save</button>
                </form>
            </div> 
        </>
    )
}

export default PersonalInfoInput
