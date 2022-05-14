import React from 'react'
import footer2 from '../images/footer2.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../CSS/Footer.css'
import wave from '../images/wave.svg'

const Footer = () => {
    return (
        <>
                <div className=" footer container-fluid p-0">
                    <img src={wave} alt="background-wave" className="footer-background"/>
                    <div className="row footer-info">
                        <div className=" footer-img col-6 pt-5 pt-lg-0 d-flex flex-column">
                                    <img src={footer2} alt="logo" className="footer-brand"/>
                                    <br/>
                                    <p className="footer-brand-info">Build Exceptional CV</p>
                        </div>
                        <div className=" footer-links pr-0 col-6 pt-5 pt-lg-0 d-flex flex-column">
                            <p className="pr-0">Social Links</p>
                            <span  className="social-icons">
                                <a href="linkedin.com" className="linkicon"><LinkedInIcon style={{color:'#ffffff'}}/></a>
                                <a href="Github.com" className="giticon"><GitHubIcon style={{color:'#ffffff'}}/></a>
                                <a href="Instagram.com" className="instaicon"><InstagramIcon style={{color:'#ffffff'}}/></a>
                            </span>
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default Footer
