import React  from 'react'
import { useSelector } from 'react-redux'
// import { addElement } from '../redux/AddSection/AddSectionAction';
// import {editButtonClick} from '../redux/EditButtonRedux/EditButtonAction'
// import AddSectionReducer from '../redux/AddSection/AddSectionReducer'
import '../CSS/TemplateMain.css'

const Temporary = () => {
    const {sections} = useSelector(state => state.AddSectionReducer)
    // const dispatch = useDispatch();

    // const [count,setCount]=useState(0);
    return (
        <>
            {
                sections.map((cval,index)=>{
                    return(
                        <>
                            <div className=" container main-info" id={cval.id} key={index}>
                                <button className="edit-button" ><i id="workInput"  className="fas fa-edit"></i></button>
                                <button className="delete-button" ><i id="workDelete"  className="fas fa-trash"></i></button>
                                <h3 id="title" className="main-heading">{cval.title}</h3>
                                <h6 id="project" className="work-company">{cval.project}</h6>
                                <p className=" work-details"><span id="role">{cval.role}</span> | <span id="sdate">{cval.sdate}</span> - <span id="edate">{cval.edate||"Present"}</span></p>
                                <ul type-of-list="unordered" className="work-points">
                                    <li id="point1">{cval.Point1}</li>
                                    <li id="point2">{cval.Point2}</li>
                                </ul>
                            </div> 
                        </>
                    )
                })
            }
            {/* <button onClick={()=>{dispatch(addElement(`element${count}`),setCount(count+1))}}>Add section</button> */}
        </>
    )
}

export default Temporary
