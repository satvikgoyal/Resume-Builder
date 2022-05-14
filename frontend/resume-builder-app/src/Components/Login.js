import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import '../CSS/Login.css'
import svg2 from '../images/svg2.svg'
import { logoutUser } from '../redux/LogoutRedux/LogoutAction'

const Login = () => {

    const dispatch=useDispatch();

    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginUser = async(e)=>{
        e.preventDefault();

        const res = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })

        const data= await res.json();

        if(res.status===422 || res.status ===400 || !data){
            window.alert("Invalid Credentials");
            setEmail("");
            setPassword("");
        }else{
            dispatch(logoutUser("true"));
            // sessionStorage.setItem("logout","true");
            window.alert("login Successful");
            history.push("/")
        }
    }
    
    return (
        <>
            <div className="container-fluid login-page">
                <img src={svg2} alt="background-img" className="login-background"/>
                <div className="container login-container ">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card login-card">
                            <div className="card-header lc-header">
                                <h3>Sign In</h3> 
                            </div>
                            <div className="card-body lc-body">
                                <form method="POST">
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-paper-plane"></i></span>
                                        </div>
                                        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                                        
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/>Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="button" value="Login" onClick={loginUser} className="btn float-right login_btn"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer lc-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<NavLink exact to="/register" className="loginLink">Register</NavLink>        
                                </div>
                                <div className="d-flex justify-content-center">
                                    <NavLink exact to="/" className="loginLink">Forgot your password?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
