import React from 'react'
import '../CSS/Sidebar.css'
import { useSelector,useDispatch} from 'react-redux'
import { editButtonClick } from '../redux/EditButtonRedux/EditButtonAction';
// import jssPreset from '@material-ui/styles/jssPreset';

const Sidebar = () => {

    const {address1,address2,email,phone,gitlink} = useSelector(state=>{return state.ContactReducer});
    // const contactInfo=JSON.parse(localStorage.getItem("contactInfo"));
    // console.log(contactInfo);
    const {Skill1,Skill2,Skill3,Skill4,Skill5} = useSelector(state=>{return state.SkillsReducer});
    const {award1,award2,award3} = useSelector(state=>{return state.AwardReducer});

    // const {userData} = useSelector(state=>state.DatabaseReducer);
    // console.log("userData in sidebar is: ");
    // console.log(userData);

    const dispatch = useDispatch()

    return (
            <>
                <div className="container sidebar">
                <div className="container side-image">
                    <i className="fas fa-arrow-circle-up"></i>
                    <p >Uplaoad image</p>
                </div>
                <div className="container sidebar-contact-info">
                    <h3 className="sidebar-headings">Contact Info
                        <span className="edit-button-span"><button  className="edit-button"><i id="contactInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button></span>
                    </h3>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-map-marker-alt"></i></span><div className="information">{address1}<br/>{address2}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-envelope"></i></span><div className="information">{email}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-phone-alt"></i></span><div className="information">{phone}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-link"></i></span><div className="information">{gitlink}</div>
                        </div>
                    </div>
                </div>
                <div className="container sidebar-contact-info">
                    <h3 className="sidebar-headings">Skills summary
                        <span className="edit-button-span"><button className="edit-button"><i id="skillsInput" onClick={e => dispatch(editButtonClick(e))} className="fas fa-edit"></i></button></span>
                    </h3>
                    <div className="skills-info">
                        <p>
                            <span className="skills-rating">
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>{Skill1}
                        </p>
                    </div>
                    <div className="skills-info">
                        <p>
                            <span className="skills-rating">
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>{Skill2}
                        </p>
                    </div>
                    <div className="skills-info">
                        <p>
                            <span className="skills-rating">
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>{Skill3}
                        </p>
                    </div>
                    <div className="skills-info">
                        <p>
                            <span className="skills-rating">
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>{Skill4}
                        </p>
                    </div>
                    <div className="skills-info">
                        <p>
                            <span className="skills-rating">
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>{Skill5}
                        </p>
                    </div>
                </div>
                <div className="container sidebar-contact-info">
                    <h3 className="sidebar-headings">Achivements
                        <span><button  className="edit-button"><i id="awardInput" onClick={e => dispatch(editButtonClick(e))} className="edit-button-icon fas fa-edit"></i></button></span>
                    </h3>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-bookmark"></i></span><div className="information">{award1}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-bookmark"></i></span><div className="information">{award2}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-points">
                            <span className="contact-icons"><i className="fas fa-bookmark"></i></span><div className="information">{award3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
