import React from 'react'
import {NavLink} from 'react-router-dom';
import '../CSS/Navbar.css'
import logo from '../images/logo.png';
import Pdf from 'react-to-pdf';
import {ref} from './BuildCV';


const Navbar = (props) => {

    const reset=()=>{
        localStorage.setItem("userData",JSON.stringify({}));
        const userData=localStorage.getItem("userData");
        console.log(userData.sectionsInfo);
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
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                        {/* <li className="nav-item"> */}
                                            {/* <button className="menu_active">Reset</button> */}
                                            {/* <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Reset</NavLink> */}
                                            <button className="createPdf" onClick={reset}
                                            style={{ height:"40px",
                                                lineHeight:" 43px",
                                                margin:" 10px",
                                                padding:" 0px 22px",
                                                display:" flex",
                                              alignItems:" center",
                                              justifyContent:" center",
                                                fontSize:" 0.8rem",
                                                textTransform:" uppercase",
                                                fontWeight:" 500",
                                                backgroundColor:"rgba(64, 149, 198, 1)",
                                                color:"#ffffff",
                                              letterSpacing:" 1px",
                                              borderRadius:" 3px",
                                              transition:" 0.2s ease-in-out"}}>Reset</button>
                                        {/* </li> */}
                                        {/* <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/login">Download</NavLink>
                                        </li> */}
                                        <Pdf targetRef={ref} filename="resume.pdf">
                                            {({toPdf}) => <button className="createPdf" onClick={toPdf}
                                            style={{ height:"40px",
                                                lineHeight:" 43px",
                                                margin:" 10px",
                                                padding:" 0px 22px",
                                                display:" flex",
                                              alignItems:" center",
                                              justifyContent:" center",
                                                fontSize:" 0.8rem",
                                                textTransform:" uppercase",
                                                fontWeight:" 500",
                                                backgroundColor:"rgba(64, 149, 198, 1)",
                                                color:"#ffffff",
                                              letterSpacing:" 1px",
                                              borderRadius:" 3px",
                                              transition:" 0.2s ease-in-out"}}>Create Pdf</button> }
                                        </Pdf>
                                    </ul>
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
