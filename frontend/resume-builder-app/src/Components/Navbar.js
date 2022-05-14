import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../CSS/Navbar.css'
import logo from '../images/logo.png';



const Navbar = () => {

    const flag=useSelector(state => {return state.LogoutReducer});
    // console.log("flag value is: ",flag);
    // console.log(useSelector(state => {return state.LogoutReducer}));

    // const flag=sessionStorage.getItem("logout");

    const RenderMenu = ()=>{
        if(flag.state==="true"){
            return(
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/buildcv">Build CV</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </ul>
            )
        }else{
            return(
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/buildcv">Build CV</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
            )
        }
    }
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light site-nav">
                            <div className="container-fluid">

                                <NavLink exact className="navbar-brand logo" to="/">
                                    <img className="logo-image" src={logo} alt="logo"/>
                                </NavLink>

                                <button className="navbar-toggler togglerIcon" type="button" data-toggle="collapse" data-target="#navContent">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navContent">
                                    <RenderMenu/>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
