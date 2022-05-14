import React from 'react'
import Sidebar from './Sidebar'
import '../CSS/Template.css'
import TemplateMain from './TemplateMain'
import '../CSS/TemplateMain.css'
// import { useSelector } from 'react-redux'

const Template = () => {
    

    return (
        <>
            <div className=" container template">
                <div className="row">
                    <div className=" col-5 p-2">
                        <Sidebar/>
                    </div>
                    <div className=" col-7 p-2">
                        <TemplateMain/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template
