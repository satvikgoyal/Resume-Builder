import React from 'react'
import '../CSS/AwardInput.css'
import { addAwards } from '../redux/AwardInputRedux/AwardAction'
import { useSelector,useDispatch } from 'react-redux'
import { discard } from '../redux/EditButtonRedux/EditButtonAction'

const AwardInput = () => {

    const {award1,award2,award3} = useSelector(state=>{return state.AwardReducer});
     const dispatch = useDispatch()

     const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/awardInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    award1,award2,award3
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
                <label className="contact-labels" for="award1">Award 1</label><br/>
                <input type="text" id="award1" className="inputs" value={award1} onChange={(e)=>dispatch(addAwards(e))} placeholder={award1}/><br/><br/>

                <label className="contact-labels" for="award2">Award 2</label><br/>
                <input type="text" id="award2" className="inputs" value={award2} onChange={(e)=>dispatch(addAwards(e))} placeholder={award2}/><br/><br/>

                <label className="contact-labels" for="award2">Award 3</label><br/>
                <input type="text" id="award3" className="inputs" value={award3} onChange={(e)=>dispatch(addAwards(e))} placeholder={award3}/><br/><br/>

                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button className="inputformButton" onClick={saveInfo}>Save</button>

            </div> 
        </>
    )
}

export default AwardInput
