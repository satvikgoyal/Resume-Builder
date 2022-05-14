import '../CSS/App.css';
import {Route,Redirect } from 'react-router';
import Home from './Home.js'
import Login from './Login.js'
import Navbar from './Navbar.js'
import Footer from './Footer';
import Logout from './Logout'
// import Template from './Template';
import BuildCV from './BuildCV';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Temporary from './Temporary';
import SignUp from './SignUp';

const App = () => {

  // const contacts=JSON.stringify(useSelector(state=>state.ContactReducer))
  // console.log(contacts);

  // useEffect(()=>{
  //   localStorage.setItem("contactInfo",contacts);
  // },[contacts]);

  // useEffect(()=>{
  //   sessionStorage.setItem("logout","false");
  // })

    // sessionStorage.setItem("logout","false");

    
  return(
    <>
      {/* <Navbar/> */}
      {/* <Router> */}

        <Route exact path={["/","/login","/register","/logout"]} component={Navbar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/buildcv" component={BuildCV}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/logout" component={Logout}/>
        <Redirect to="/"/>

        {/* <Temporary/> */}
      {/* </Router> */}

      <footer>
        <Footer/>
      </footer>
    </>
  )

}

export default App;
