import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router'
import { logoutUser } from '../redux/LogoutRedux/LogoutAction';

const Logout = () => {

    const history=useHistory();
    const dispatch= useDispatch();

    useEffect(()=>{
        fetch("/logout",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Accept:"application.json"
            },
            credentials:'include'
        }).then((res)=>{
            dispatch(logoutUser("false"));
            // sessionStorage.setItem("logout","false")
            history.push("/login",{replace:true});
            if(res.status!==200){
                throw new Error(res.error);
            }
        }).catch((error)=>{
            console.log(error);
        })
    })
    return (
        <>
          <h1>Logout page</h1>  
        </>
    )
}

export default Logout
