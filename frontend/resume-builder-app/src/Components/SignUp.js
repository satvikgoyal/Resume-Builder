import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../CSS/Signup.css'
// import {useDispatch} from 'react-redux'
// import {addSignUpData} from './actions/index'

const SignUp = () => {

    // const [name,setName] = useState("");

    // const [pwd,setPwd] = useState("");
    
    // const [email,setEmail] = useState("");
    
    // const [cpwd,setCpwd] = useState("");

    const history = useHistory();

    const [user,setUser] =  useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    })

    let name,value;

    const handleInputs = (e) =>{
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }


    const postData = async (e) => {
        e.preventDefault();

        const {username,email,password,cpassword} = user;

        // console.log(username);
        // console.log(email);
        // console.log(password);
        // console.log(cpassword);

        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,email,password,cpassword
            })
        })

        // console.log(res);

        const data = await res.json();

        // console.log(data.status);


        if(res.status===422 || res.status ===500 || !data){
            console.log("Invalid Registeration");
            window.alert("Invalid registerartion");
        }else{
            console.log("Successful Registeration");
            window.alert("Successful registerartion");
            history.push("/login");

        }

        console.log("button is clicked");

    }

    // const initializeState = ()=>{
    //     setUser({
    //         username:"",
    //         email:"",
    //         password:"",
    //         cpassword:""

    //     });
    // }

    // const dispatch = useDispatch()

   

    return (
        <>
            <div className="container-fluid signup-form">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <form className="form-container mx-auto" method="POST">
                            <h2>Sign Up</h2>
                            <p>Please fill in this form to create an account!</p>
                            <hr/>
                            <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>                    
                                    </div>
                                    <input type="text" className="form-control" autoComplete="off" name="username" placeholder="Username" onChange={handleInputs}value={user.name} required="required"/>
                            </div>
                            <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-paper-plane"></i></span>                    
                                    </div>
                                    <input type="email" className="form-control" autoComplete="off" name="email" placeholder="Email Address" onChange={handleInputs} value={user.email} required="required"/>
                            </div>
                            <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>                    
                                    </div>
                                    <input type="password" className="form-control" autoComplete="off" name="password" placeholder="Password" onChange={handleInputs} value={user.pwd} required="required"/>
                            </div>
                            <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i><i className="fa fa-check"></i></span>                    
                                    </div>
                                    <input type="password" className="form-control" autoComplete="off" name="cpassword" placeholder="Confirm Password" onChange={handleInputs}value={user.cpwd} required="required"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label"></label>
                                <input type="checkbox" required="required"/> I accept the <NavLink className="signup-condition" exact to="/" >Terms of Use</NavLink> &amp; <NavLink className="signup-condition" exact to="/">Privacy Policy</NavLink>
                            </div>
                            <div className="form-group">
                                <button type="Submit" className="btn btn-primary btn-lg" onClick={postData}>Sign Up</button>
                            </div>
                    </form>
                    <div className="text-center">Already have an account? <NavLink exact to="/login">Login here</NavLink></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
