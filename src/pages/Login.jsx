import React from "react";
import "../styles/login.css";
import LoginFinal from "../components/LoginForm";



function Login(){

    function loginAttempt(details){
        console.log("login Attempt");
        console.log(details);
        //TODO: find User By Email
    }


    return(
    <>
    
    <div className="login-container">
        <img src="src/assets/logo with text.png" alt="logo FinRize" className="logo"/>
        <LoginFinal
        onLoginAttempt = {loginAttempt}
        />
        </div>
    </>
    );
}

export default Login;