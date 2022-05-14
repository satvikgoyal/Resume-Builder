import React from 'react'
import '../CSS/SkillsInput.css'
import { useSelector,useDispatch } from 'react-redux'
import { addSkills } from '../redux/SkillsInputRedux/SkillsAction';
import { discard } from '../redux/EditButtonRedux/EditButtonAction';
const SkillsInput = () => {
    
    const {Skill1,Skill2,Skill3,Skill4,Skill5} = useSelector(state=>{return state.SkillsReducer});
    const dispatch = useDispatch()
    
    const saveInfo = async(e)=>{
        try{

            e.preventDefault();

            const res= await fetch("/skillInfo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    Skill1,Skill2,Skill3,Skill4,Skill5
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
                <label className="contact-labels" for="Skill1">Skill 1</label><br/>
                <input type="text" id="Skill1" className="inputs" value={Skill1} onChange={e=>dispatch(addSkills(e))} placeholder={Skill1}/><br/><br/>
                <div className="skill-rating">
                    <button className="rating-values" value="1">1</button>
                    <button className="rating-values" value="2">2</button>
                    <button className="rating-values" value="3">3</button>
                    <button className="rating-values" value="4">4</button>
                </div>

                <label className="contact-labels" for="Skill2">Skill 2</label><br/>
                <input type="text" id="Skill2" className="inputs" value={Skill2} onChange={e=>dispatch(addSkills(e))} placeholder={Skill2}/><br/><br/>
                <div className="skill-rating">
                    <button className="rating-values" value="1">1</button>
                    <button className="rating-values" value="2">2</button>
                    <button className="rating-values" value="3">3</button>
                    <button className="rating-values" value="4">4</button>
                </div>

                <label className="contact-labels" for="Skill3">Skill3</label><br/>
                <input type="text" id="Skill3" className="inputs" value={Skill3} onChange={e=>dispatch(addSkills(e))} placeholder={Skill3}/><br/><br/>
                <div className="skill-rating">
                    <button className="rating-values" value="1">1</button>
                    <button className="rating-values" value="2">2</button>
                    <button className="rating-values" value="3">3</button>
                    <button className="rating-values" value="4">4</button>
                </div>

                <label className="contact-labels" for="Skill4">Skill4</label><br/>
                <input type="text" id="Skill4" className="inputs" value={Skill4} onChange={e=>dispatch(addSkills(e))} placeholder={Skill4}/><br/><br/>
                <div className="skill-rating">
                    <button className="rating-values" value="1">1</button>
                    <button className="rating-values" value="2">2</button>
                    <button className="rating-values" value="3">3</button>
                    <button className="rating-values" value="4">4</button>
                </div>

                <label className="contact-labels" for="Skill6">Skill5</label><br/>
                <input type="text" id="Skill6" className="inputs" value={Skill5} onChange={e=>dispatch(addSkills(e))} placeholder={Skill5}/><br/><br/>
                <div className="skill-rating">
                    <button className="rating-values" value="1">1</button>
                    <button className="rating-values" value="2">2</button>
                    <button className="rating-values" value="3">3</button>
                    <button className="rating-values" value="4">4</button>
                </div>

                <button className="inputformButton" onClick={e=>dispatch(discard())}>Discard</button>
                <button className="inputformButton" onClick={saveInfo}>Save</button>
            </div> 
        </>
    )
}

export default SkillsInput
