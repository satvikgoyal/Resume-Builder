// import Logout from "../../Components/Logout";

export const logoutUser = (flag)=>{
    // console.log(flag);
    return({
        type:"Logout_User",
        data:flag
    })
}