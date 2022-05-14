import React from 'react'
import '../CSS/ContactInput.css'
import { useSelector,useDispatch } from 'react-redux'
import { addContactInfo } from '../redux/ContactInputRedux/ContactAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';

const ContactInput = () => {
    const {address1,address2,email,phone,gitlink} = useSelector(state=>{return state.ContactReducer});
    const dispatch = useDispatch()

    const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/contactInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    address1,address2,email,phone,gitlink
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
                <label className="contact-labels" for="address1">Address Line 1</label><br/>
                <input type="text" id="address1" className="inputs" value={address1} onChange={(e)=>dispatch(addContactInfo(e))} placeholder="3205 Eden Drive, Glen Allen"/><br/><br/>

                <label className="contact-labels" for="address2">Address Line 2</label><br/>
                <input type="text" id="address2" className="inputs" value={address2} onChange={(e)=>dispatch(addContactInfo(e))} placeholder="3205 Eden Drive, Glen Allen"/><br/><br/>

                <label className="contact-labels" for="email">Email</label><br/>
                <input type="email" id="email" className="inputs" value={email} onChange={(e)=>dispatch(addContactInfo(e))} placeholder="3205 Eden Drive, Glen Allen"/><br/><br/>

                <label className="contact-labels" for="phone">Phone</label><br/>
                <input type="text" id="phone" className="inputs" value={phone} onChange={(e)=>dispatch(addContactInfo(e))} placeholder="804-931-9418"/><br/><br/>

                <label className="contact-labels" for="link">Personal Site or Github Link</label><br/>
                <input type="text" id="link" className="inputs" value={gitlink} onChange={(e)=>dispatch(addContactInfo(e))} placeholder="github.com/oliwil"/><br/><br/>

                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button className="inputformButton" onClick={saveInfo}>Save</button>


            </div> 
        </>
    )
}

export default ContactInput
