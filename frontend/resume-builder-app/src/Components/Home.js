import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/home.css'
import svg1 from '../images/svg1.svg'

const Home =() => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center pt-5 flex-column">
                                    <h1>
                                        Stand out with a Exceptional CV with
                                        <br/>
                                        <strong className="brand_name"> Resume Builder</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        Don't know how to build a CV, Resume Builder will make it up to you.
                                        Login for anytime access and edit your data.
                                    </h2>
                                    <div className="mt-3">
                                    <NavLink className="btn-get-started" to='/buildcv'>Build My CV</NavLink>
                                    </div>
                                </div>

                                <div className="col-md-6 order-1 order-lg-2 header-img">
                                    <img src={svg1} alt="home_img" className="img-fluid animated"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
