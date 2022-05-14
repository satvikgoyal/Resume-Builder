import React from 'react'
import '../CSS/PersonalProfileInput.css'
import { useSelector,useDispatch } from 'react-redux'
import { addProfileInfo } from '../redux/PerosnalProfileInputReducer/ProfileAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';

const PersonalProfileInput = () => {

    const {profileInfo} = useSelector(state=>{return state.ProfileReducer});
    const dispatch = useDispatch();

    const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/aboutme",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    profileInfo
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
                <label className="contact-labels" for="profileInfo">Personal Profile</label><br/>
                <textarea  id="profileInfo" className="inputs" cols="3" rows="3" value={profileInfo} onChange={e=>dispatch(addProfileInfo(e))} placeholder={profileInfo}/><br/><br/>
                
                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button className="inputformButton" onClick={saveInfo}>Save</button>
            </div> 
        </>
    )
}

export default PersonalProfileInput
